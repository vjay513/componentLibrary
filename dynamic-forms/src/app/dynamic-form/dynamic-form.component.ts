import { Component, HostListener, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { questions } from './questionnaire';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  hraQuestionnaire = questions;
  eachQuestion: any;
  pageNumber = 7;
  dynamicQuestions = [];
  hraQuesPagesLength = 0;
  totalPages = 0;
  progressBarValue = 0;
  questionDeposit;

  annualWellnessForm = this.fb.group({});

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.fetchParams()
  }

  fetchParams() {
    this.dynamicQuestions = [];
    this.eachQuestion = this.hraQuestionnaire.HealthyQuestHRAScript.Pages[this.pageNumber];
    this.groupingLabels();
    this.buildForm();
    this.changesOnSpecificQuestion();
    this.progressBarCalc();
    this.totalPages = this.hraQuestionnaire.HealthyQuestHRAScript.Pages.length - 1;
  }

  changesOnSpecificQuestion() {
    const multiLevelQue = this.eachQuestion.Questions.find(elem => elem.responsive && elem.responsive[0].Question.responsive);
    if (multiLevelQue) {
      this.questionDeposit = multiLevelQue.responsive[0].Question.responsive[0].Questions;
    }
  }

  buildForm() {
    this.eachQuestion.Questions.forEach(que => {
      if (que.QuestionType !== 'RadioButton') {
        return;
      }
      this.annualWellnessForm.addControl(que.Id, this.fb.control('', Validators.required));
      if (que.responsive) {
        que.responsive.forEach(subQue => {
          this.annualWellnessForm.addControl(subQue.Question.Id, this.fb.control('', Validators.required));
        });
      }
    });
    this.addCheckBoxControls();
  }

  test(control) {
    const form:any = this.annualWellnessForm.get('checkBoxQuestions' + this.pageNumber);
    if (control.value) {
      form.reset()
      form.controls[this.lastPivot()].setValue(true)
    }

    return null;
  }


  lastPivot() {
    let pivot = 0;
    this.eachQuestion.Questions.forEach(que => {
      if (que.QuestionType === 'Checkbox') {
        pivot = que.Id
      }
    });
    return pivot;
  }

  addCheckBoxControls() {
    this.annualWellnessForm.addControl('checkBoxQuestions' + this.pageNumber, new FormGroup({}));
    const checkBoxQuestionsGroup: any = this.annualWellnessForm.get('checkBoxQuestions' + this.pageNumber) as FormGroup;

    this.eachQuestion.Questions.forEach(que => {
      if (que.QuestionType === 'Checkbox') {
        console.log(this.lastPivot())
        if (que.Id === this.lastPivot()) {
          checkBoxQuestionsGroup.addControl(que.Id, new FormControl('', [this.test.bind(this)]));
        } else {
          checkBoxQuestionsGroup.addControl(que.Id, new FormControl('', []));
        }

      }
    });
  }

  progressBarCalc() {
    this.progressBarValue = this.pageNumber === 0 ? 0 : Math.floor((this.pageNumber / this.totalPages) * 100);
  }

  showOnDemandQuestions(option) {
    const options = ['I am an occasional/social user', 'I currently use', 'I am an ex-user'];
    if (!options.includes(option.AnswerString)) {
      return;
    }
    options.pop();
    this.eachQuestion.Questions = this.eachQuestion.Questions.slice(0, 1);
    if (options.includes(option.AnswerString)) {
      this.eachQuestion.Questions = [...this.eachQuestion.Questions, ...this.questionDeposit];
    }
    this.buildForm();
  }

  specificControlReset(controlId) {
    this.annualWellnessForm.controls[controlId].setValue(null);
  }

  radioChange(event, question) {
    if (!question.responsive) {
      this.showOnDemandQuestions(question);
      return;
    }
    if (question.responsive.length === 1) {
      this.whenSingleResponsiveQuestion(event, question);
    } else {
      this.whenDoubleResponsiveQuestions(event, question);
    }
  }

  whenSingleResponsiveQuestion(event, question) {
    this.dynamicQuestions = [];
    if (event.value === 'No') {
      this.eachQuestion.Questions = [this.eachQuestion.Questions[0]];
      return;
    }
    this.dynamicQuestions.push(question.responsive[0].Question.Id);
  }

  whenDoubleResponsiveQuestions(event, question) {
    if (event.value === 'No') {
      const responsiveQue = question.responsive.filter(res => res.relatedAnswer === event.value);
      this.dynamicQuestions.push(responsiveQue[0].Question.Id);
    } else if (event.value === 'Yes') {
      const responsiveQue = question.responsive.filter(res => res.relatedAnswer !== event.value);
      const index = this.dynamicQuestions.indexOf(responsiveQue[0].Question.Id);
      this.dynamicQuestions[index] = '';
    }
    this.dynamicQuestions = this.dynamicQuestions.filter(val => val);
  }

  groupingLabels() {
    const mapQuestions = new Map();
    this.eachQuestion.Questions.reduce((acc, que) => {
      if (que.QuestionType === "RadioButton" && !que.StepperLine) {
        return [...acc, ...[que]];
      }

      if (mapQuestions.has(que.GroupLabel)) {
        if (mapQuestions.get(que.GroupLabel).has(que.GroupLabel)) {
          que.GroupLabel = "";
        }
      } else {
        mapQuestions.set(que.GroupLabel, new Set());
        mapQuestions.get(que.GroupLabel).add(que.GroupLabel);
      }
      return [...acc, ...[que]];
    }, []);
  }

  onNext() {
    this.pageNumber++
    console.log(this.pageNumber)
    this.fetchParams();
  }

  onPrevious() {
    this.pageNumber--;
    console.log(this.pageNumber)
    this.fetchParams();
  }
}
