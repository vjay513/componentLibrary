import { Component, HostListener, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { UserService } from 'shared/services/user.service';
import { questions } from './questionnaire';

@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.scss']
})

export class FlexLayoutComponent implements OnInit {
  hraQuestionnaire = questions;
  eachQuestion: any = [];
  pageNumber = 0;
  hraQuesPagesLength = 0;
  totalPages;
  progressBarValue = 0;
  questionDeposit;
  loadSpinner;
  mapDynamicQues = new Map();
  pageForm: FormGroup;
  checkBoxValid = false;
  annualWellnessForm = this.fb.group({});
  savingData = [];
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.onResizeStepper(event.target.outerWidth);
  }

  private get width() {
    return window.outerWidth;
  }

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loadSpinner = true;
    //this.totalPages > 0 ? this.fetchParams() : this.getUserDemographics();
    this.fetchParams();
  }

  fetchParams() {
    //this.activeRoute.params.subscribe(param => {
    this.questionDeposit = [];
    this.mapDynamicQues = new Map();
    this.checkBoxValid = false;
    //this.pageNumber = parseInt(param.pageNumber, 10) - 1;
    this.eachQuestion = {
      ...this.eachQuestion,
      ...this.hraQuestionnaire.HealthyQuestHRAScript.Pages[this.pageNumber]
    };
    this.onResizeStepper(this.width);
    this.groupingLabels();
    Object.keys(this.annualWellnessForm.controls).forEach(e => {
      this.annualWellnessForm.removeControl(e);
    });
    this.buildForm();
    this.progressBarCalc();
    this.loadSpinner = false;
    //});
  }

  // UserDemographics API call
  /*   getUserDemographics() {
      this.userService.getUserDemographics().subscribe(demographics => {
        if (demographics.sex === 'Male') {
          this.hraQuestionnaire.HealthyQuestHRAScript.Pages = this.hraQuestionnaire.HealthyQuestHRAScript.Pages.filter(
            (que, index) => index !== 3
          );
        }
        this.hraQuesPagesLength = this.hraQuestionnaire.HealthyQuestHRAScript.Pages.length;
        this.totalPages = this.hraQuesPagesLength - 1;
        this.fetchParams();
      });
    } */

  buildForm() {
    this.annualWellnessForm.addControl(
      'page' + this.pageNumber,
      new FormGroup({})
    );
    this.pageForm = this.annualWellnessForm.get(
      'page' + this.pageNumber
    ) as FormGroup;
    this.addCheckBoxControls();

    this.eachQuestion.Questions.forEach(que => {
      if (que.QuestionType === 'Checkbox') {
        return;
      }
      this.addValidators(que);
    });
  }

  addValidators(que) {
    if (que.QuestionType === 'Numeric') {
      this.pageForm.addControl(
        que.Id,
        this.fb.control('', [
          Validators.required,
          this.numericErrorValidation(que, 1, que.Validators)
        ])
      );
      return;
    }
    this.pageForm.addControl(que.Id, this.fb.control('', Validators.required));
  }

  noneOfTheAboveIndex() {
    const pivot = this.eachQuestion.Questions.find(
      que =>
        que.QuestionType === 'Checkbox' && que.Label === 'None of the above'
    );
    return pivot.Id;
  }

  CheckboxChange(id) {
    const checkForm = this.pageForm.get('checkBoxQuestions') as FormGroup;
    if (
      id === this.noneOfTheAboveIndex() &&
      !checkForm.controls[this.noneOfTheAboveIndex()].value
    ) {
      checkForm.enable();
    } else if (
      id === this.noneOfTheAboveIndex() &&
      checkForm.controls[this.noneOfTheAboveIndex()].value
    ) {
      checkForm.reset();
      checkForm.disable();
      checkForm.controls[this.noneOfTheAboveIndex()].patchValue(true);
      checkForm.controls[this.noneOfTheAboveIndex()].enable();
    }
  }

  checkBoxGroupValidation(): ValidatorFn {
    return (group: FormGroup): any => {
      this.checkBoxValid = !Object.values(group.value).some((e: any) => e);
    };
  }

  addCheckBoxControls() {
    const Checker = this.eachQuestion.Questions.findIndex(
      que => que.QuestionType === 'Checkbox'
    );
    if (Checker < 0) {
      return;
    }
    this.checkBoxValid = true;
    this.pageForm.addControl('checkBoxQuestions', new FormGroup({}));
    const checkForm = this.pageForm.get('checkBoxQuestions') as FormGroup;
    this.eachQuestion.Questions.forEach(que => {
      if (que.QuestionType !== 'Checkbox') {
        return;
      }
      checkForm.addControl(que.Id, this.fb.control(''));
    });
    checkForm.setValidators(this.checkBoxGroupValidation.bind(this)());
    checkForm.enable();
  }

  onResizeStepper(width) {
    this.eachQuestion.Questions.map(que => {
      if (que.StepperLine) {
        width < 600
          ? (que.Orientation = 'vertical')
          : (que.Orientation = 'horizontal');
      }
      if (que.responsive && que.responsive.length === 1) {
        que.responsive.map(subQue => {
          if (subQue.Question.StepperLine) {
            width < 600
              ? (subQue.Question.Orientation = 'vertical')
              : (subQue.Question.Orientation = 'horizontal');
          }
        });
      }
      return que;
    });
  }

  progressBarCalc() {
    this.progressBarValue =
      this.pageNumber === 0
        ? 0
        : Math.floor((this.pageNumber / (this.totalPages + 1)) * 100);
  }

  multiLevelResponsiveQuestion() {
    const multiLevelRespQue = this.eachQuestion.Questions.find(
      elem => elem.responsive && elem.responsive[0].Question.responsive
    );
    if (multiLevelRespQue) {
      this.questionDeposit =
        multiLevelRespQue.responsive[0].Question.responsive[0].Questions;
    }
  }

  showOnDemandQuestions(option) {
    const options = [
      'I am an ex-user',
      'I am an occasional/social user',
      'I currently use'
    ];
    if (
      this.questionDeposit.length === 0 ||
      !options.includes(option.AnswerString)
    ) {
      return;
    }
    this.eachQuestion.Questions = this.eachQuestion.Questions.slice(0, 1);
    if (option.AnswerString !== 'I am an ex-user') {
      this.eachQuestion.Questions = [
        ...this.eachQuestion.Questions,
        ...this.questionDeposit
      ];
    }
    this.buildForm();
    this.questionDeposit.forEach(e => {
      if (
        this.pageForm.get(e.Id) &&
        option.AnswerString === 'I am an ex-user'
      ) {
        this.pageForm.removeControl(e.Id);
      } else {
        this.pageForm.get(e.Id).patchValue('');
      }
    });
    this.groupingLabels();
  }

  radioChange(event, question) {
    if (!question.responsive) {
      this.showOnDemandQuestions(question);
      return;
    }

    if (question.responsive.length === 1) {
      this.mapDynamicQues.set(question.Id, 'Yes');
      this.eachQuestion.Questions = [this.eachQuestion.Questions[0]];
      if (event.value === 'Yes') {
        this.mapDynamicQues.set(question.Id, 'No');
        if (this.pageForm.get(question.responsive[0].Question.Id)) {
          this.pageForm.removeControl(question.responsive[0].Question.Id);
        }
        this.pageForm.addControl(
          question.responsive[0].Question.Id,
          this.fb.control('', Validators.required)
        );

        this.multiLevelResponsiveQuestion();
      } else {
        this.questionDeposit.forEach(e => {
          this.pageForm.removeControl(e.Id);
        });
        this.questionDeposit = [];
      }
    } else {
      let dynamicId;
      question.responsive.forEach(res => {
        if (this.pageForm.get(res.Question.Id)) {
          this.pageForm.removeControl(res.Question.Id);
        }
        if (res.relatedAnswer === event.value) {
          dynamicId = res.Question.Id;
        }
      });
      this.mapDynamicQues.set(question.Id, event.value);
      if (event.value === 'Yes' && question.responsive[0].Question.FieldLabel) {
        const microGroup = question.responsive[0].Question.FieldLabel.reduce(
          (acc, key, index) => {
            return {
              ...acc,
              ...{
                [key]: new FormControl('', [
                  Validators.required,
                  this.numericErrorValidation(
                    question,
                    index + 1,
                    question.responsive[0].Question.Validators
                  )
                ])
              }
            };
          },
          {}
        );
        this.pageForm.addControl(dynamicId, new FormGroup(microGroup));
        return;
      }
      this.pageForm.addControl(
        dynamicId,
        this.fb.control('', Validators.required)
      );
    }
  }

  numericErrorValidation(que, index, validator): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const val = parseInt(control.value, 10);
      if (!control.value || !control.value.length) {
        return { NumericError: '', NumericWarning: '' };
      }

      const minVal = validator[2 * index - 1].MinValue;
      const maxVal = validator[2 * index - 1].MaxValue;

      if (isNaN(control.value) || control.value.includes('.')) {
        return {
          NumericError: validator[2 * (index - 1)].FailureMessage,
          NumericWarning: ''
        };
      } else if (val < minVal || val > maxVal) {
        return {
          NumericError: '',
          NumericWarning: validator[2 * index - 1].FailureMessage
        };
      }
    };
  }

  groupingLabels() {
    const mapQuestions = new Map();
    this.eachQuestion.Questions.reduce((acc, que) => {
      if (que.QuestionType === 'RadioButton' && !que.StepperLine) {
        return [...acc, ...[que]];
      }
      if (mapQuestions.has(que.GroupLabel)) {
        if (mapQuestions.get(que.GroupLabel).has(que.GroupLabel)) {
          que.GroupLabel = '';
        }
      } else {
        mapQuestions.set(que.GroupLabel, new Set());
        mapQuestions.get(que.GroupLabel).add(que.GroupLabel);
      }
      return [...acc, ...[que]];
    }, []);
  }


  get answerFormat() {
    return {
      Question: null,
      Answer: null,
      AnswerTag: null,
      AnswerType: null,
      Calculate: null
    };
  }

  getAnsTypeandTag(q, val) {
    let ansTagType = {
      AnswerTag: null,
      AnswerType: null,
    }
    if(val.constructor.name === 'Object'){
      q.PossibleAnswers.forEach(e => {
        const range = e.AnswerRange.split('-').map(e => parseInt(e,10));
        Object.values(val).forEach(v=>{
          if(range[0] < v && v < range[1]){
            ansTagType = { ...ansTagType, ...{ AnswerTag: e.AnswerTag, AnswerType: e.AnswerType } }
          }
        })

      });
    } else if (q.QuestionType === "DropdownList" || q.QuestionType === "RadioButton" || q.QuestionType === "Checkbox") {
      q.PossibleAnswers.forEach(e => {
        if (e.AnswerString === val) {
          ansTagType = { ...ansTagType, ...{ AnswerTag: e.AnswerTag, AnswerType: e.AnswerType } }
        }
      });
    }
    return ansTagType;
  }

  getResponseiveQuestionInfo(q, id, val) {
    let details = {};
    q.responsive.forEach(q => {
      if (q.Question.Id === id) {
        details = {
          Question: q.Question.Label,
          ...this.getAnsTypeandTag(q.Question, val),
          Calculate: q.Question.QuestionType === "RadioButton" ? false : true
        }
      }
    });
    return details;
  }

  getQuestion(q, index) {
    if (q.QuestionType === 'DropdownList' && !q.GroupLabel && !q.Label) {
      return index - 1;
    }
    if (q.SubLabel) {
      return q.SubLabel;
    }
    return q.GroupLabel || q.Label;
  }

  getCheckBoxInfo(id) {
    let checkBoxAns = [];
    const controls = Object.keys(this.annualWellnessForm.value['page' + this.pageNumber][id]);
    const values = Object.values(this.annualWellnessForm.value['page' + this.pageNumber][id]);
    let counter = 0;
    for (const q of this.eachQuestion.Questions) {
      for (const f of controls) {
        if (q.Id === f) {
          checkBoxAns.push({
            Question: q.Label,
            Answer: values[counter] ? 'Yes': 'No',
            ...this.getAnsTypeandTag(q, values[counter] ? 'Yes': 'No'),
            Calculate: false
          })
          break;
        }
      }
      counter++;
    }
    return checkBoxAns;
  }

  getTextFieldRange(){
    let details = {};

    return details;
  }

  fetchQuestionInfo(id, index, val) {
    let details = {};

    for (const q of this.eachQuestion.Questions) {
      if (q.Id === id) {
        details = {
          ...details,
          Question: this.getQuestion(q, index),
          ...this.getAnsTypeandTag(q, val),
          Calculate: q.QuestionType === "RadioButton" ? false : true
        }
        break;
      } else if (q.responsive && !this.mapDynamicQues.has(id)) {
        details = this.getResponseiveQuestionInfo(q, id, val);
        if (Object.keys(details).length !== 0) {
          break;
        }
      }
    }
    return details;
  }

  getAnswer(formControlValues, index){
    if(formControlValues[index].constructor.name === 'Object'){
      if(Object.values(formControlValues[index]).length === 2){
        return `${Object.values(formControlValues[index])[0]}/${Object.values(formControlValues[index])[1]}`;
      }else{
        return Object.values(formControlValues[index])[0];
      }
    }
    return formControlValues[index];
  }

  pageReducer(){
    const formControls = Object.keys(this.annualWellnessForm.value['page' + this.pageNumber]);
    const formControlValues = Object.values(this.annualWellnessForm.value['page' + this.pageNumber]);

    let data = formControls.reduce((acc, id: any, index) => {
      if (id === "checkBoxQuestions") {
        return [...acc, ...this.getCheckBoxInfo(id)];
      }
      return [...acc, ...[{ ...this.answerFormat, ...this.fetchQuestionInfo(id, index, formControlValues[index]), ...{ Answer: this.getAnswer(formControlValues, index) } }]];
    }, []);

    data = data.map(d => this.pageNumber === 0 && d.Question.constructor.name !== "String" ? { ...d, Question: data[d.Question].Question } : d);

    if (this.savingData[this.pageNumber]) {
      this.savingData[this.pageNumber] = data;
    } else {
      this.savingData.push(data);
    }
    console.log(this.savingData);
  }

  onNext() {
    this.pageReducer()
    this.loadSpinner = true;
    if (this.pageNumber === this.totalPages) {
      this.router.navigate(['/orders/hra/success']);
      // API Call
      return;
    }
    this.pageNumber = this.pageNumber + 1;
    this.fetchParams();
    //this.router.navigate(['/orders/hra', this.pageNumber]);
  }

  onPrevious() {
    this.pageNumber = this.pageNumber - 1;
    this.loadSpinner = true;
    this.fetchParams();
    //this.router.navigate(['/orders/hra', this.pageNumber]);
  }

  checkStatus() {
    if (this.checkBoxValid) {
      return true;
    }
    return !this.annualWellnessForm.valid;
  }
}
