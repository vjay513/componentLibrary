const questions = {
  "HealthyQuestHRAScript": {
    "ScriptId": "1001",
    "ScriptType": "HealthyQuestHRA",
    "totalPages": 9,
    "Pages": [
      {
        "Questions": [
          {
            "Id": "1000",
            "Orientation": "horizontal",
            "display": true,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 1,
            "PossibleAnswers": [
              {
                "Id": "131",
                "AnswerString": "3",
                "AnswerIndex": 0,
                "AnswerTag": "131",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "132",
                "AnswerString": "4",
                "AnswerIndex": 1,
                "AnswerTag": "132",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "133",
                "AnswerString": "5",
                "AnswerIndex": 2,
                "AnswerTag": "133",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "134",
                "AnswerString": "6",
                "AnswerIndex": 3,
                "AnswerTag": "134",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "135",
                "AnswerString": "7",
                "AnswerIndex": 4,
                "AnswerTag": "135",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "136",
                "AnswerString": "8",
                "AnswerIndex": 5,
                "AnswerTag": "136",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "What is your most recent measured height?",
            "FieldLabel": "Feet",
            "Label": "",
            "Index": 1,
            "QuestionType": "DropdownList"
          },
          {
            "Id": "1001",
            "display": true,
            "Orientation": "horizontal",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 2,
            "PossibleAnswers": [
              {
                "Id": "137",
                "AnswerString": "3",
                "AnswerIndex": 0,
                "AnswerTag": "137",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "138",
                "AnswerString": "4",
                "AnswerIndex": 1,
                "AnswerTag": "138",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "139",
                "AnswerString": "5",
                "AnswerIndex": 2,
                "AnswerTag": "139",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "140",
                "AnswerString": "6",
                "AnswerIndex": 3,
                "AnswerTag": "140",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "141",
                "AnswerString": "7",
                "AnswerIndex": 4,
                "AnswerTag": "141",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "142",
                "AnswerString": "8",
                "AnswerIndex": 5,
                "AnswerTag": "142",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "FieldLabel": "Inches",
            "Label": "",
            "Index": 2,
            "QuestionType": "DropdownList"
          },
          {
            "Id": "1002",
            "display": true,
            "Orientation": "horizontal",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Enter",
            "QuestionGroupId": "",
            "AdditionalText": "Range: 80-600",
            "QuestionOrder": 3,
            "PossibleAnswers": null,
            "Validators": [
              {
                "Type": "Numeric",
                "Severity": "Error",
                "FailureMessage": "Weight is numeric"
              },
              {
                "MinValue": 80,
                "MaxValue": 600,
                "Type": "Range",
                "Severity": "Warning",
                "FailureMessage": "Weight should be between 80 and 600."
              }
            ],
            "GroupLabel": "",
            "FieldLabel": "Pounds",
            "Label": "What is your most recent measured weight to the nearest digit?",
            "Index": 3,
            "QuestionType": "Numeric"
          },
          {
            "Id": "1003",
            "display": true,
            "Orientation": "vertical",
            "StepperLine": false,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 4,
            "PossibleAnswers": [
              {
                "Id": "147",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "147",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "148",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "148",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "Label": "Do you know the exact value of your most recently measured blood pressure?",
            "Index": 4,
            "QuestionType": "RadioButton",
            "responsive": [
              {
                "relatedAnswer": "Yes",
                "Question": {
                  "Id": "1004",
                  "display": true,
                  "Orientation": "horizontal",
                  "ParentQuestionId": "1003",
                  "ParentAnswerId": "147",
                  "SuggestedText": "Enter",
                  "QuestionGroupId": "1",
                  "AdditionalText": "Range: 20-280",
                  "QuestionOrder": 5,
                  "PossibleAnswers": [
                    {
                      "Id": "149",
                      "AnswerRange": "1-119",
                      "AnswerIndex": 0,
                      "AnswerTag": "149",
                      "AnswerType": "REPORTING_HRA_ANSWER_ID"
                    },
                    {
                      "Id": "150",
                      "AnswerRange": "120-129",
                      "AnswerIndex": 1,
                      "AnswerTag": "Blood_Pressure_5_BP",
                      "AnswerType": "HQ_DEBIT"
                    },
                    {
                      "Id": "151",
                      "AnswerRange": "130-280",
                      "AnswerIndex": 2,
                      "AnswerTag": "Blood_Pressure_10_BP",
                      "AnswerType": "HQ_DEBIT"
                    },
                    {
                      "Id": "152",
                      "AnswerRange": "1-79",
                      "AnswerIndex": 0,
                      "AnswerTag": "152",
                      "AnswerType": "REPORTING_HRA_ANSWER_ID"
                    },
                    {
                      "Id": "153",
                      "AnswerRange": "80-89",
                      "AnswerIndex": 1,
                      "AnswerTag": "Blood_Pressure_5_BP",
                      "AnswerType": "HQ_DEBIT"
                    },
                    {
                      "Id": "154",
                      "AnswerRange": "90-200",
                      "AnswerIndex": 2,
                      "AnswerTag": "Blood_Pressure_10_BP",
                      "AnswerType": "HQ_DEBIT"
                    }
                  ],
                  "Validators": [
                    {
                      "Type": "Numeric",
                      "Severity": "Error",
                      "FailureMessage": "Systolic is numeric"
                    },
                    {
                      "MinValue": 20,
                      "MaxValue": 280,
                      "Type": "Range",
                      "Severity": "Warning",
                      "FailureMessage": "Systolic should be between 20 and 280."
                    },
                    {
                      "Type": "Numeric",
                      "Severity": "Error",
                      "FailureMessage": "Diastolic is numeric"
                    },
                    {
                      "MinValue": 20,
                      "MaxValue": 200,
                      "Type": "Range",
                      "Severity": "Warning",
                      "FailureMessage": "Diastolic should be between 20 and 200."
                    }
                  ],
                  "GroupLabel": "",
                  "Label": "What is the exact value of your most recently measured blood pressure?",
                  "FieldLabel": ["Systolic value (top)", "Diastolic value (bottom)"],
                  "Index": 5,
                  "QuestionType": "Numeric"
                }
              },
              {
                "relatedAnswer": "No",
                "Question": {
                  "Id": "1005",
                  "display": false,
                  "Orientation": "vertical",
                  "StepperLine": true,
                  "ParentQuestionId": "1003",
                  "ParentAnswerId": "148",
                  "SuggestedText": "Select",
                  "QuestionGroupId": "",
                  "AdditionalText": "",
                  "QuestionOrder": 6,
                  "PossibleAnswers": [
                    {
                      "Id": "155",
                      "AnswerString": "Less than 120/80 mmHg (normal)",
                      "AnswerIndex": 0,
                      "AnswerTag": "155",
                      "AnswerType": "REPORTING_HRA_ANSWER_ID"
                    },
                    {
                      "Id": "156",
                      "AnswerString": "120-129 over less than 80 mmHg (elevated)",
                      "AnswerIndex": 1,
                      "AnswerTag": "Blood_Pressure_5_BP",
                      "AnswerType": "HQ_DEBIT"
                    },
                    {
                      "Id": "157",
                      "AnswerString": "130-139 over 80-89 mmHg (stage 1 high blood pressure)",
                      "AnswerIndex": 2,
                      "AnswerTag": "Blood_Pressure_10_BP",
                      "AnswerType": "HQ_DEBIT"
                    },
                    {
                      "Id": "158",
                      "AnswerString": "149/90 or higher (stage 2 high blood pressure)",
                      "AnswerIndex": 3,
                      "AnswerTag": "Blood_Pressure_10_BP",
                      "AnswerType": "HQ_DEBIT"
                    },
                    {
                      "Id": "159",
                      "AnswerString": "Do not know",
                      "AnswerIndex": 4,
                      "AnswerTag": "Blood_Pressure_7",
                      "AnswerType": "HQ_DEBIT"
                    }
                  ],
                  "Validators": [],
                  "GroupLabel": "",
                  "Label": "What is the range you believe best represents your blood pressure?",
                  "Index": 6,
                  "QuestionType": "RadioButton"
                }
              }
            ]
          }
        ]
      },
      {
        "Questions": [
          {
            "Id": "1006",
            "Orientation": "vertical",
            "StepperLine": false,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 7,
            "PossibleAnswers": [
              {
                "Id": "160",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "160",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "161",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "161",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "Label": "Do you know the exact value of your most recently measured total cholesterol?",
            "Index": 7,
            "QuestionType": "RadioButton",
            "responsive": [
              {
                "relatedAnswer": "Yes",
                "Question": {
                  "Id": "1007",
                  "ParentQuestionId": "1006",
                  "ParentAnswerId": "160",
                  "SuggestedText": "Enter",
                  "QuestionGroupId": "",
                  "AdditionalText": "Range: 20-950",
                  "QuestionOrder": 8,
                  "PossibleAnswers": [
                    {
                      "Id": "162",
                      "AnswerRange": "1-199",
                      "AnswerIndex": 0,
                      "AnswerTag": "162",
                      "AnswerType": "REPORTING_HRA_ANSWER_ID"
                    },
                    {
                      "Id": "163",
                      "AnswerRange": "200-220",
                      "AnswerIndex": 1,
                      "AnswerTag": "Cholesterol_7_Total_Ratio",
                      "AnswerType": "HQ_DEBIT"
                    },
                    {
                      "Id": "164",
                      "AnswerRange": "221-950",
                      "AnswerIndex": 2,
                      "AnswerTag": "Cholesterol_12_Total_Ratio",
                      "AnswerType": "HQ_DEBIT"
                    }
                  ],
                  "Validators": [
                    {
                      "Type": "Numeric",
                      "Severity": "Error",
                      "FailureMessage": "Total cholesterol is numeric"
                    },
                    {
                      "MinValue": 20,
                      "MaxValue": 950,
                      "Type": "Range",
                      "Severity": "Warning",
                      "FailureMessage": "Total cholesterol should be between 20 and 950."
                    }
                  ],
                  "GroupLabel": "",
                  "Label": "What is the exact value of your most recently measured total cholesterol?",
                  "FieldLabel": ["Total cholesterol"],
                  "Index": 8,
                  "QuestionType": "Numeric"
                }
              },
              {
                "relatedAnswer": "No",
                "Question": {
                  "Id": "1008",
                  "Orientation": "vertical",
                  "StepperLine": true,
                  "ParentQuestionId": "1006",
                  "ParentAnswerId": "161",
                  "SuggestedText": "Select",
                  "QuestionGroupId": "",
                  "AdditionalText": "",
                  "QuestionOrder": 9,
                  "PossibleAnswers": [
                    {
                      "Id": "165",
                      "AnswerString": "Less than 200 (normal)",
                      "AnswerIndex": 0,
                      "AnswerTag": "165",
                      "AnswerType": "REPORTING_HRA_ANSWER_ID"
                    },
                    {
                      "Id": "166",
                      "AnswerString": "Between 200-239 (borderline high)",
                      "AnswerIndex": 1,
                      "AnswerTag": "Cholesterol_7_Total_Ratio",
                      "AnswerType": "HQ_DEBIT"
                    },
                    {
                      "Id": "167",
                      "AnswerString": "Greater than 239 (high)",
                      "AnswerIndex": 2,
                      "AnswerTag": "Cholesterol_12_Total_Ratio",
                      "AnswerType": "HQ_DEBIT"
                    },
                    {
                      "Id": "168",
                      "AnswerString": "Do not know",
                      "AnswerIndex": 4,
                      "AnswerTag": "Cholesterol_10",
                      "AnswerType": "HQ_DEBIT"
                    }
                  ],
                  "Validators": [],
                  "GroupLabel": "",
                  "Label": "What is the range you believe best represents your total cholesterol?",
                  "Index": 9,
                  "QuestionType": "RadioButton"
                }
              }
            ]
          },
          {
            "Id": "1009",
            "Orientation": "vertical",
            "StepperLine": false,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 10,
            "PossibleAnswers": [
              {
                "Id": "169",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "169",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "170",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "170",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "Label": "Do you know the exact value of your recently measured fasting glucose?",
            "Index": 10,
            "QuestionType": "RadioButton",
            "responsive": [
              {
                "relatedAnswer": "Yes",
                "Question": {
                  "Id": "1010",
                  "ParentQuestionId": "1009",
                  "ParentAnswerId": "169",
                  "SuggestedText": "Enter",
                  "QuestionGroupId": "",
                  "AdditionalText": "Range: 20-720",
                  "QuestionOrder": 11,
                  "PossibleAnswers": [
                    {
                      "Id": "171",
                      "AnswerRange": "1-99",
                      "AnswerIndex": 0,
                      "AnswerTag": "171",
                      "AnswerType": "REPORTING_HRA_ANSWER_ID"
                    },
                    {
                      "Id": "172",
                      "AnswerRange": "100-125",
                      "AnswerIndex": 1,
                      "AnswerTag": "Diabetes_8_A1c_Glu",
                      "AnswerType": "HQ_DEBIT"
                    },
                    {
                      "Id": "173",
                      "AnswerRange": "126-720",
                      "AnswerIndex": 2,
                      "AnswerTag": "Diabetes_14_A1c_Glu",
                      "AnswerType": "HQ_DEBIT"
                    }
                  ],
                  "Validators": [
                    {
                      "Type": "Numeric",
                      "Severity": "Error",
                      "FailureMessage": "Fasting glucose is numeric"
                    },
                    {
                      "MinValue": 20,
                      "MaxValue": 720,
                      "Type": "Range",
                      "Severity": "Warning",
                      "FailureMessage": "Fasting glucose should be between 20 and 720."
                    }
                  ],
                  "GroupLabel": "",
                  "Label": "What is the exact value of your most recently measured fasting glucose?",
                  "FieldLabel": ["Fasting glucose"],
                  "Index": 11,
                  "QuestionType": "Numeric"
                }
              },
              {
                "relatedAnswer": "No",
                "Question": {
                  "Id": "1011",
                  "ParentQuestionId": "1009",
                  "Orientation": "vertical",
                  "StepperLine": true,
                  "ParentAnswerId": "170",
                  "SuggestedText": "Select",
                  "QuestionGroupId": "",
                  "AdditionalText": "",
                  "QuestionOrder": 12,
                  "PossibleAnswers": [
                    {
                      "Id": "174",
                      "AnswerString": "Less than 100 (normal)",
                      "AnswerIndex": 0,
                      "AnswerTag": "174",
                      "AnswerType": "REPORTING_HRA_ANSWER_ID"
                    },
                    {
                      "Id": "175",
                      "AnswerString": "Between 100-125 (impaired)",
                      "AnswerIndex": 1,
                      "AnswerTag": "Diabetes_8_A1c_Glu",
                      "AnswerType": "HQ_DEBIT"
                    },
                    {
                      "Id": "176",
                      "AnswerString": "Greater than 125 (high)",
                      "AnswerIndex": 2,
                      "AnswerTag": "Diabetes_14_A1c_Glu",
                      "AnswerType": "HQ_DEBIT"
                    },
                    {
                      "Id": "177",
                      "AnswerString": "Do not know",
                      "AnswerIndex": 4,
                      "AnswerTag": "Diabetes_8",
                      "AnswerType": "HQ_DEBIT"
                    }
                  ],
                  "Validators": [],
                  "GroupLabel": "",
                  "Label": "What is the range you believe best represents your fasting glucose?",
                  "Index": 12,
                  "QuestionType": "RadioButton"
                }
              }
            ]
          }
        ]
      },
      {
        "Questions": [
          {
            "Id": "1012",
            "display": false,
            "Orientation": "horizontal",
            "StepperLine": true,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 13,
            "PossibleAnswers": [
              {
                "Id": "178",
                "AnswerString": "0 times",
                "AnswerIndex": 0,
                "AnswerTag": "178",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "179",
                "AnswerString": "1-3 times",
                "AnswerIndex": 1,
                "AnswerTag": "Blood_Pressure_5_BP",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "180",
                "AnswerString": "4-10 times",
                "AnswerIndex": 2,
                "AnswerTag": "Blood_Pressure_10_BP",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "181",
                "AnswerString": "More than 10 times",
                "AnswerIndex": 3,
                "AnswerTag": "Blood_Pressure_10_BP",
                "AnswerType": "HQ_DEBIT"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "Label": "In the past 12 months, how many times have you seen a physician?",
            "Index": 13,
            "QuestionType": "RadioButton"
          },
          {
            "Id": "1013",
            "ParentQuestionId": "",
            "Orientation": "vertical",
            "StepperLine": false,
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 14,
            "PossibleAnswers": [
              {
                "Id": "178",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "178",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "179",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "Self_Care_5",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "180",
                "AnswerString": "Not sure",
                "AnswerIndex": 2,
                "AnswerTag": "Diabetes_14_A1c_Glu",
                "AnswerType": "HQ_DEBIT"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "Label": "Do you have a personal physician?",
            "Index": 14,
            "QuestionType": "RadioButton"
          },
          {
            "Id": "1014",
            "Orientation": "vertical",
            "StepperLine": false,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 15,
            "PossibleAnswers": [
              {
                "Id": "181",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "182",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "182",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "183",
                "AnswerString": "Not sure",
                "AnswerIndex": 2,
                "AnswerTag": "183",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "Label": "Are you or your spouse/partner pregnant?",
            "Index": 15,
            "QuestionType": "RadioButton"
          },
          {
            "Id": "1015",
            "ParentQuestionId": "",
            "Orientation": "vertical",
            "StepperLine": false,
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 16,
            "PossibleAnswers": [
              {
                "Id": "184",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "184",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "185",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "Nutrition_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "185",
                "AnswerString": "Not sure",
                "AnswerIndex": 2,
                "AnswerTag": "Nutrition_2",
                "AnswerType": "HQ_DEBIT"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "Label": "Is the person who is pregnant or planning on becoming pregnant taking folic acid?",
            "Index": 16,
            "QuestionType": "RadioButton"
          }
        ]
      },
      {
        "Questions": [
          {
            "Id": "1016",
            "ParentQuestionId": "",
            "Orientation": "horizontal",
            "StepperLine": true,
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "2",
            "AdditionalText": "",
            "QuestionOrder": 17,
            "PossibleAnswers": [
              {
                "Id": "186",
                "AnswerString": "In the past year",
                "AnswerIndex": 0,
                "AnswerTag": "186",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "187",
                "AnswerString": "In the past two years",
                "AnswerIndex": 1,
                "AnswerTag": "187",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "188",
                "AnswerString": "In the past three years",
                "AnswerIndex": 2,
                "AnswerTag": "Preventive_Screenings_1",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "189",
                "AnswerString": "In the past five years",
                "AnswerIndex": 3,
                "AnswerTag": "Preventive_Screenings_1",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "190",
                "AnswerString": "More than five years ago",
                "AnswerIndex": 4,
                "AnswerTag": "Preventive_Screenings_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "191",
                "AnswerString": "Never",
                "AnswerIndex": 5,
                "AnswerTag": "Preventive_Screenings_3",
                "AnswerType": "HQ_DEBIT"
              }
            ],
            "Validators": [],
            "GroupLabel": "When were your most recent health exams/tests?",
            "SubLabel": "Pap/HPV test",
            "Index": 17,
            "QuestionType": "RadioButton"
          },
          {
            "Id": "1017",
            "ParentQuestionId": "",
            "Orientation": "horizontal",
            "StepperLine": true,
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "2",
            "AdditionalText": "",
            "QuestionOrder": 18,
            "PossibleAnswers": [
              {
                "Id": "192",
                "AnswerString": "In the past year",
                "AnswerIndex": 0,
                "AnswerTag": "192",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "193",
                "AnswerString": "In the past two years",
                "AnswerIndex": 1,
                "AnswerTag": "193",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "194",
                "AnswerString": "In the past three years",
                "AnswerIndex": 2,
                "AnswerTag": "Preventive_Screenings_1",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "195",
                "AnswerString": "In the past five years",
                "AnswerIndex": 3,
                "AnswerTag": "Preventive_Screenings_1",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "196",
                "AnswerString": "More than five years ago",
                "AnswerIndex": 4,
                "AnswerTag": "Preventive_Screenings_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "197",
                "AnswerString": "Never",
                "AnswerIndex": 5,
                "AnswerTag": "Preventive_Screenings_3",
                "AnswerType": "HQ_DEBIT"
              }
            ],
            "Validators": [],
            "GroupLabel": "When were your most recent health exams/tests?",
            "SubLabel": "Professional breast exam",
            "Index": 18,
            "QuestionType": "RadioButton"
          }
        ]
      },
      {
        "Questions": [
          {
            "Id": "1018",
            "Orientation": "vertical",
            "StepperLine": false,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 19,
            "PossibleAnswers": [
              {
                "Id": "198",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "198",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "199",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "199",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "Label": "Have you ever used tobacco or e-cigarettes?",
            "Index": 19,
            "QuestionType": "RadioButton",
            "responsive": [
              {
                "relatedAnswer": "Yes",
                "Question": {
                  "Id": "1019",
                  "display": true,
                  "Orientation": "horizontal",
                  "StepperLine": true,
                  "ParentQuestionId": "1018",
                  "ParentAnswerId": "198",
                  "SuggestedText": "Select",
                  "QuestionGroupId": "",
                  "AdditionalText": "",
                  "QuestionOrder": 20,
                  "PossibleAnswers": [
                    {
                      "Id": "200",
                      "AnswerString": "I am an ex-user",
                      "AnswerIndex": 0,
                      "AnswerTag": "200",
                      "AnswerType": "REPORTING_HRA_ANSWER_ID"
                    },
                    {
                      "Id": "201",
                      "AnswerString": "I am an occasional/social user",
                      "AnswerIndex": 1,
                      "AnswerTag": "201",
                      "AnswerType": "REPORTING_HRA_ANSWER_ID"
                    },
                    {
                      "Id": "202",
                      "AnswerString": "I currently use",
                      "AnswerIndex": 2,
                      "AnswerTag": "202",
                      "AnswerType": "REPORTING_HRA_ANSWER_ID"
                    }
                  ],
                  "Validators": [],
                  "GroupLabel": "",
                  "Label": "Which of the following best describes your usage?",
                  "Index": 20,
                  "QuestionType": "RadioButton",
                  "responsive": [
                    {
                      "relatedAnswer": "I am an occasional/social user",
                      "Questions": [
                        {
                          "Id": "1020",
                          "Orientation": "horizontal",
                          "StepperLine": true,
                          "ParentQuestionId": "",
                          "ParentAnswerId": "",
                          "SuggestedText": "Select",
                          "QuestionGroupId": "3",
                          "AdditionalText": "",
                          "QuestionOrder": 21,
                          "PossibleAnswers": [
                            {
                              "Id": "203",
                              "AnswerString": "0 times",
                              "AnswerIndex": 0,
                              "AnswerTag": "203",
                              "AnswerType": "REPORTING_HRA_ANSWER_ID"
                            },
                            {
                              "Id": "204",
                              "AnswerString": "1-5 times",
                              "AnswerIndex": 1,
                              "AnswerTag": "Tobacco_1",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "205",
                              "AnswerString": "6-10 times",
                              "AnswerIndex": 2,
                              "AnswerTag": "Tobacco_2",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "206",
                              "AnswerString": "11-15 times",
                              "AnswerIndex": 3,
                              "AnswerTag": "Tobacco_4",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "207",
                              "AnswerString": "More than 15 times",
                              "AnswerIndex": 4,
                              "AnswerTag": "Tobacco_5",
                              "AnswerType": "HQ_DEBIT"
                            }
                          ],
                          "Validators": [],
                          "GroupLabel": "On an average day, how many times do you use the following products?",
                          "SubLabel": "Smoke cigarettes",
                          "Index": 21,
                          "QuestionType": "RadioButton"
                        },
                        {
                          "Id": "1021",
                          "Orientation": "horizontal",
                          "StepperLine": true,
                          "ParentQuestionId": "",
                          "ParentAnswerId": "",
                          "SuggestedText": "Select",
                          "QuestionGroupId": "3",
                          "AdditionalText": "",
                          "QuestionOrder": 22,
                          "PossibleAnswers": [
                            {
                              "Id": "208",
                              "AnswerString": "0 times",
                              "AnswerIndex": 0,
                              "AnswerTag": "208",
                              "AnswerType": "REPORTING_HRA_ANSWER_ID"
                            },
                            {
                              "Id": "209",
                              "AnswerString": "1-5 times",
                              "AnswerIndex": 1,
                              "AnswerTag": "Tobacco_1",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "210",
                              "AnswerString": "6-10 times",
                              "AnswerIndex": 2,
                              "AnswerTag": "Tobacco_2",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "211",
                              "AnswerString": "11-15 times",
                              "AnswerIndex": 3,
                              "AnswerTag": "Tobacco_4",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "212",
                              "AnswerString": "More than 15 times",
                              "AnswerIndex": 4,
                              "AnswerTag": "Tobacco_5",
                              "AnswerType": "HQ_DEBIT"
                            }
                          ],
                          "Validators": [],
                          "GroupLabel": "On an average day, how many times do you use the following products?",
                          "SubLabel": "Smoke e-cigarettes",
                          "Index": 22,
                          "QuestionType": "RadioButton"
                        },
                        {
                          "Id": "1022",
                          "Orientation": "horizontal",
                          "StepperLine": true,
                          "ParentQuestionId": "",
                          "ParentAnswerId": "",
                          "SuggestedText": "Select",
                          "QuestionGroupId": "3",
                          "AdditionalText": "",
                          "QuestionOrder": 23,
                          "PossibleAnswers": [
                            {
                              "Id": "213",
                              "AnswerString": "0 times",
                              "AnswerIndex": 0,
                              "AnswerTag": "213",
                              "AnswerType": "REPORTING_HRA_ANSWER_ID"
                            },
                            {
                              "Id": "214",
                              "AnswerString": "1-5 times",
                              "AnswerIndex": 1,
                              "AnswerTag": "Tobacco_1",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "215",
                              "AnswerString": "6-10 times",
                              "AnswerIndex": 2,
                              "AnswerTag": "Tobacco_2",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "216",
                              "AnswerString": "11-15 times",
                              "AnswerIndex": 3,
                              "AnswerTag": "Tobacco_4",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "217",
                              "AnswerString": "More than 15 times",
                              "AnswerIndex": 4,
                              "AnswerTag": "Tobacco_5",
                              "AnswerType": "HQ_DEBIT"
                            }
                          ],
                          "Validators": [],
                          "GroupLabel": "On an average day, how many times do you use the following products?",
                          "SubLabel": "Smoke cigars",
                          "Index": 23,
                          "QuestionType": "RadioButton"
                        },
                        {
                          "Id": "1023",
                          "Orientation": "horizontal",
                          "StepperLine": true,
                          "ParentQuestionId": "",
                          "ParentAnswerId": "",
                          "SuggestedText": "Select",
                          "QuestionGroupId": "3",
                          "AdditionalText": "",
                          "QuestionOrder": 24,
                          "PossibleAnswers": [
                            {
                              "Id": "218",
                              "AnswerString": "0 times",
                              "AnswerIndex": 0,
                              "AnswerTag": "218",
                              "AnswerType": "REPORTING_HRA_ANSWER_ID"
                            },
                            {
                              "Id": "219",
                              "AnswerString": "1-5 times",
                              "AnswerIndex": 1,
                              "AnswerTag": "Tobacco_1",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "220",
                              "AnswerString": "6-10 times",
                              "AnswerIndex": 2,
                              "AnswerTag": "Tobacco_2",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "221",
                              "AnswerString": "11-15 times",
                              "AnswerIndex": 3,
                              "AnswerTag": "Tobacco_4",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "222",
                              "AnswerString": "More than 15 times",
                              "AnswerIndex": 4,
                              "AnswerTag": "Tobacco_5",
                              "AnswerType": "HQ_DEBIT"
                            }
                          ],
                          "Validators": [],
                          "GroupLabel": "On an average day, how many times do you use the following products?",
                          "SubLabel": "Use smokeless tobacco",
                          "Index": 24,
                          "QuestionType": "RadioButton"
                        },
                        {
                          "Id": "1024",
                          "Orientation": "horizontal",
                          "StepperLine": true,
                          "ParentQuestionId": "",
                          "ParentAnswerId": "",
                          "SuggestedText": "Select",
                          "QuestionGroupId": "3",
                          "AdditionalText": "",
                          "QuestionOrder": 25,
                          "PossibleAnswers": [
                            {
                              "Id": "223",
                              "AnswerString": "0 times",
                              "AnswerIndex": 0,
                              "AnswerTag": "223",
                              "AnswerType": "REPORTING_HRA_ANSWER_ID"
                            },
                            {
                              "Id": "224",
                              "AnswerString": "1-5 times",
                              "AnswerIndex": 1,
                              "AnswerTag": "Tobacco_1",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "225",
                              "AnswerString": "6-10 times",
                              "AnswerIndex": 2,
                              "AnswerTag": "Tobacco_2",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "226",
                              "AnswerString": "11-15 times",
                              "AnswerIndex": 3,
                              "AnswerTag": "Tobacco_4",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "227",
                              "AnswerString": "More than 15 times",
                              "AnswerIndex": 4,
                              "AnswerTag": "Tobacco_5",
                              "AnswerType": "HQ_DEBIT"
                            }
                          ],
                          "Validators": [],
                          "GroupLabel": "On an average day, how many times do you use the following products?",
                          "SubLabel": "Smoke a pipe",
                          "Index": 25,
                          "QuestionType": "RadioButton"
                        }
                      ]
                    },
                    {
                      "relatedAnswer": "I currently use",
                      "Questions": [
                        {
                          "Id": "1025",
                          "Orientation": "horizontal",
                          "StepperLine": true,
                          "ParentQuestionId": "",
                          "ParentAnswerId": "",
                          "SuggestedText": "Select",
                          "QuestionGroupId": "3",
                          "AdditionalText": "",
                          "QuestionOrder": 26,
                          "PossibleAnswers": [
                            {
                              "Id": "203",
                              "AnswerString": "0 times",
                              "AnswerIndex": 0,
                              "AnswerTag": "203",
                              "AnswerType": "REPORTING_HRA_ANSWER_ID"
                            },
                            {
                              "Id": "204",
                              "AnswerString": "1-5 times",
                              "AnswerIndex": 1,
                              "AnswerTag": "Tobacco_1",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "205",
                              "AnswerString": "6-10 times",
                              "AnswerIndex": 2,
                              "AnswerTag": "Tobacco_2",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "206",
                              "AnswerString": "11-15 times",
                              "AnswerIndex": 3,
                              "AnswerTag": "Tobacco_4",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "207",
                              "AnswerString": "More than 15 times",
                              "AnswerIndex": 4,
                              "AnswerTag": "Tobacco_5",
                              "AnswerType": "HQ_DEBIT"
                            }
                          ],
                          "Validators": [],
                          "GroupLabel": "On an average day, how many times do you use the following products?",
                          "SubLabel": "Smoke cigarettes",
                          "Index": 26,
                          "QuestionType": "RadioButton"
                        },
                        {
                          "Id": "1026",
                          "Orientation": "horizontal",
                          "StepperLine": true,
                          "ParentQuestionId": "",
                          "ParentAnswerId": "",
                          "SuggestedText": "Select",
                          "QuestionGroupId": "3",
                          "AdditionalText": "",
                          "QuestionOrder": 27,
                          "PossibleAnswers": [
                            {
                              "Id": "208",
                              "AnswerString": "0 times",
                              "AnswerIndex": 0,
                              "AnswerTag": "208",
                              "AnswerType": "REPORTING_HRA_ANSWER_ID"
                            },
                            {
                              "Id": "209",
                              "AnswerString": "1-5 times",
                              "AnswerIndex": 1,
                              "AnswerTag": "Tobacco_1",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "210",
                              "AnswerString": "6-10 times",
                              "AnswerIndex": 2,
                              "AnswerTag": "Tobacco_2",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "211",
                              "AnswerString": "11-15 times",
                              "AnswerIndex": 3,
                              "AnswerTag": "Tobacco_4",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "212",
                              "AnswerString": "More than 15 times",
                              "AnswerIndex": 4,
                              "AnswerTag": "Tobacco_5",
                              "AnswerType": "HQ_DEBIT"
                            }
                          ],
                          "Validators": [],
                          "GroupLabel": "On an average day, how many times do you use the following products?",
                          "SubLabel": "Smoke e-cigarettes",
                          "Index": 27,
                          "QuestionType": "RadioButton"
                        },
                        {
                          "Id": "1027",
                          "Orientation": "horizontal",
                          "StepperLine": true,
                          "ParentQuestionId": "",
                          "ParentAnswerId": "",
                          "SuggestedText": "Select",
                          "QuestionGroupId": "3",
                          "AdditionalText": "",
                          "QuestionOrder": 24,
                          "PossibleAnswers": [
                            {
                              "Id": "213",
                              "AnswerString": "0 times",
                              "AnswerIndex": 0,
                              "AnswerTag": "213",
                              "AnswerType": "REPORTING_HRA_ANSWER_ID"
                            },
                            {
                              "Id": "214",
                              "AnswerString": "1-5 times",
                              "AnswerIndex": 1,
                              "AnswerTag": "Tobacco_1",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "215",
                              "AnswerString": "6-10 times",
                              "AnswerIndex": 2,
                              "AnswerTag": "Tobacco_2",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "216",
                              "AnswerString": "11-15 times",
                              "AnswerIndex": 3,
                              "AnswerTag": "Tobacco_4",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "217",
                              "AnswerString": "More than 15 times",
                              "AnswerIndex": 4,
                              "AnswerTag": "Tobacco_5",
                              "AnswerType": "HQ_DEBIT"
                            }
                          ],
                          "Validators": [],
                          "GroupLabel": "On an average day, how many times do you use the following products?",
                          "SubLabel": "Smoke cigars",
                          "Index": 28,
                          "QuestionType": "RadioButton"
                        },
                        {
                          "Id": "1028",
                          "Orientation": "horizontal",
                          "StepperLine": true,
                          "ParentQuestionId": "",
                          "ParentAnswerId": "",
                          "SuggestedText": "Select",
                          "QuestionGroupId": "3",
                          "AdditionalText": "",
                          "QuestionOrder": 29,
                          "PossibleAnswers": [
                            {
                              "Id": "218",
                              "AnswerString": "0 times",
                              "AnswerIndex": 0,
                              "AnswerTag": "218",
                              "AnswerType": "REPORTING_HRA_ANSWER_ID"
                            },
                            {
                              "Id": "219",
                              "AnswerString": "1-5 times",
                              "AnswerIndex": 1,
                              "AnswerTag": "Tobacco_1",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "220",
                              "AnswerString": "6-10 times",
                              "AnswerIndex": 2,
                              "AnswerTag": "Tobacco_2",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "221",
                              "AnswerString": "11-15 times",
                              "AnswerIndex": 3,
                              "AnswerTag": "Tobacco_4",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "222",
                              "AnswerString": "More than 15 times",
                              "AnswerIndex": 4,
                              "AnswerTag": "Tobacco_5",
                              "AnswerType": "HQ_DEBIT"
                            }
                          ],
                          "Validators": [],
                          "GroupLabel": "On an average day, how many times do you use the following products?",
                          "SubLabel": "Use smokeless tobacco",
                          "Index": 29,
                          "QuestionType": "RadioButton"
                        },
                        {
                          "Id": "1029",
                          "Orientation": "horizontal",
                          "StepperLine": true,
                          "ParentQuestionId": "",
                          "ParentAnswerId": "",
                          "SuggestedText": "Select",
                          "QuestionGroupId": "3",
                          "AdditionalText": "",
                          "QuestionOrder": 30,
                          "PossibleAnswers": [
                            {
                              "Id": "223",
                              "AnswerString": "0 times",
                              "AnswerIndex": 0,
                              "AnswerTag": "223",
                              "AnswerType": "REPORTING_HRA_ANSWER_ID"
                            },
                            {
                              "Id": "224",
                              "AnswerString": "1-5 times",
                              "AnswerIndex": 1,
                              "AnswerTag": "Tobacco_1",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "225",
                              "AnswerString": "6-10 times",
                              "AnswerIndex": 2,
                              "AnswerTag": "Tobacco_2",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "226",
                              "AnswerString": "11-15 times",
                              "AnswerIndex": 3,
                              "AnswerTag": "Tobacco_4",
                              "AnswerType": "HQ_DEBIT"
                            },
                            {
                              "Id": "227",
                              "AnswerString": "More than 15 times",
                              "AnswerIndex": 4,
                              "AnswerTag": "Tobacco_5",
                              "AnswerType": "HQ_DEBIT"
                            }
                          ],
                          "Validators": [],
                          "GroupLabel": "On an average day, how many times do you use the following products?",
                          "SubLabel": "Smoke a pipe",
                          "Index": 30,
                          "QuestionType": "RadioButton"
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "Questions": [
          {
            "Id": "1030",
            "Orientation": "horizontal",
            "StepperLine": true,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 31,
            "PossibleAnswers": [
              {
                "Id": "228",
                "AnswerString": "None",
                "AnswerIndex": 0,
                "AnswerTag": "228",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "229",
                "AnswerString": "1-6 drinks",
                "AnswerIndex": 1,
                "AnswerTag": "229",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "230",
                "AnswerString": "7-9 drinks",
                "AnswerIndex": 2,
                "AnswerTag": "Alcohol_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "231",
                "AnswerString": "10-12 drinks",
                "AnswerIndex": 3,
                "AnswerTag": "Alcohol_3",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "231",
                "AnswerString": "13-15 drinks",
                "AnswerIndex": 4,
                "AnswerTag": "Alcohol_6",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "232",
                "AnswerString": "More than 15 drinks",
                "AnswerIndex": 5,
                "AnswerTag": "Alcohol_10",
                "AnswerType": "HQ_DEBIT"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "Label": "In an average week, how many alcoholic drinks do you usually consume?",
            "Index": 31,
            "QuestionType": "RadioButton"
          },
          {
            "Id": "1031",
            "Orientation": "vertical",
            "StepperLine": false,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 32,
            "PossibleAnswers": [
              {
                "Id": "233",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Alcohol_5",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "234",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "234",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "Label": "In the last 6 months, have you had five or more alcoholic drinks in a single sitting?",
            "Index": 32,
            "QuestionType": "RadioButton"
          },
          {
            "Id": "1032",
            "Orientation": "horizontal",
            "StepperLine": true,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "4",
            "AdditionalText": "",
            "QuestionOrder": 33,
            "PossibleAnswers": [
              {
                "Id": "235",
                "AnswerString": "0 servings",
                "AnswerIndex": 0,
                "AnswerTag": "Nutrition_10",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "236",
                "AnswerString": "1 serving",
                "AnswerIndex": 1,
                "AnswerTag": "Nutrition_7",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "237",
                "AnswerString": "2 servings",
                "AnswerIndex": 2,
                "AnswerTag": "Nutrition_5",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "238",
                "AnswerString": "3 servings",
                "AnswerIndex": 3,
                "AnswerTag": "Nutrition_3",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "239",
                "AnswerString": "4 servings",
                "AnswerIndex": 4,
                "AnswerTag": "Nutrition_1",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "240",
                "AnswerString": "More than 4 servings",
                "AnswerIndex": 5,
                "AnswerTag": "240",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "On an average day, how many servings of the following do you eat?",
            "SubLabel": "Fruits and/or vegetables",
            "Index": 33,
            "QuestionType": "RadioButton"
          },
          {
            "Id": "1033",
            "Orientation": "horizontal",
            "StepperLine": true,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "4",
            "AdditionalText": "",
            "QuestionOrder": 34,
            "PossibleAnswers": [
              {
                "Id": "241",
                "AnswerString": "0 servings",
                "AnswerIndex": 0,
                "AnswerTag": "Nutrition_4",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "242",
                "AnswerString": "1 serving",
                "AnswerIndex": 1,
                "AnswerTag": "Nutrition_3",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "243",
                "AnswerString": "2 servings",
                "AnswerIndex": 2,
                "AnswerTag": "Nutrition_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "244",
                "AnswerString": "3 servings",
                "AnswerIndex": 3,
                "AnswerTag": "Nutrition_1",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "245",
                "AnswerString": "4 servings",
                "AnswerIndex": 4,
                "AnswerTag": "245",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "246",
                "AnswerString": "More than 4 servings",
                "AnswerIndex": 5,
                "AnswerTag": "246",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "On an average day, how many servings of the following do you eat?",
            "SubLabel": "High fiber foods",
            "toolTip": "For example, cereal and whole grain bread",
            "Index": 34,
            "QuestionType": "RadioButton"
          },
          {
            "Id": "1034",
            "Orientation": "horizontal",
            "StepperLine": true,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "4",
            "AdditionalText": "",
            "QuestionOrder": 35,
            "PossibleAnswers": [
              {
                "Id": "247",
                "AnswerString": "0 servings",
                "AnswerIndex": 0,
                "AnswerTag": "247",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "248",
                "AnswerString": "1 serving",
                "AnswerIndex": 1,
                "AnswerTag": "248",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "249",
                "AnswerString": "2 servings",
                "AnswerIndex": 2,
                "AnswerTag": "249",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "250",
                "AnswerString": "3 servings",
                "AnswerIndex": 3,
                "AnswerTag": "250",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "251",
                "AnswerString": "4 servings",
                "AnswerIndex": 4,
                "AnswerTag": "Nutrition_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "252",
                "AnswerString": "More than 4 servings",
                "AnswerIndex": 5,
                "AnswerTag": "Nutrition_6",
                "AnswerType": "HQ_DEBIT"
              }
            ],
            "Validators": [],
            "GroupLabel": "On an average day, how many servings of the following do you eat?",
            "SubLabel": "High fat foods",
            "Index": 35,
            "QuestionType": "RadioButton"
          }
        ]
      },
      {
        "Questions": [
          {
            "Id": "1035",
            "Orientation": "horizontal",
            "StepperLine": true,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "5",
            "AdditionalText": "",
            "QuestionOrder": 36,
            "PossibleAnswers": [
              {
                "Id": "253",
                "AnswerString": "0 times",
                "AnswerIndex": 0,
                "AnswerTag": "Exercise_14",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "254",
                "AnswerString": "1 times",
                "AnswerIndex": 1,
                "AnswerTag": "Exercise_10",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "255",
                "AnswerString": "2 times",
                "AnswerIndex": 2,
                "AnswerTag": "Exercise_8",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "256",
                "AnswerString": "3 times",
                "AnswerIndex": 3,
                "AnswerTag": "Exercise_5",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "257",
                "AnswerString": "4 times",
                "AnswerIndex": 4,
                "AnswerTag": "Exercise_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "258",
                "AnswerString": "More than 4 times",
                "AnswerIndex": 5,
                "AnswerTag": "258",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In an average week, how many times do you participate in the following?",
            "SubLabel": "Aerobic exercise",
            "toolTip": "For example, cardio, brisk walking, swimming, running",
            "Index": 36,
            "QuestionType": "RadioButton"
          },
          {
            "Id": "1036",
            "Orientation": "horizontal",
            "StepperLine": true,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "5",
            "AdditionalText": "",
            "QuestionOrder": 37,
            "PossibleAnswers": [
              {
                "Id": "259",
                "AnswerString": "0 times",
                "AnswerIndex": 0,
                "AnswerTag": "Exercise_6",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "260",
                "AnswerString": "1 times",
                "AnswerIndex": 1,
                "AnswerTag": "Exercise_4",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "261",
                "AnswerString": "2 times",
                "AnswerIndex": 2,
                "AnswerTag": "Exercise_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "262",
                "AnswerString": "3 times",
                "AnswerIndex": 3,
                "AnswerTag": "262",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "263",
                "AnswerString": "4 times",
                "AnswerIndex": 4,
                "AnswerTag": "263",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "264",
                "AnswerString": "More than 4 times",
                "AnswerIndex": 5,
                "AnswerTag": "264",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In an average week, how many times do you participate in the following?",
            "SubLabel": "Strength training exercise",
            "Index": 37,
            "QuestionType": "RadioButton"
          },
          {
            "Id": "1037",
            "Orientation": "horizontal",
            "StepperLine": true,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 38,
            "PossibleAnswers": [
              {
                "Id": "265",
                "AnswerString": "Never",
                "AnswerIndex": 0,
                "AnswerTag": "265",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "266",
                "AnswerString": "Seldom",
                "AnswerIndex": 1,
                "AnswerTag": "Safety_4",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "267",
                "AnswerString": "Sometimes",
                "AnswerIndex": 2,
                "AnswerTag": "Safety_6",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "268",
                "AnswerString": "Often",
                "AnswerIndex": 3,
                "AnswerTag": "Safety_8",
                "AnswerType": "HQ_DEBIT"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "Label": "How often do you use your cell phone while driving, excluding hands free usage?",
            "Index": 38,
            "QuestionType": "RadioButton"
          },
          {
            "Id": "1038",
            "Orientation": "horizontal",
            "StepperLine": true,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 39,
            "PossibleAnswers": [
              {
                "Id": "269",
                "AnswerString": "Within 5 mph",
                "AnswerIndex": 0,
                "AnswerTag": "269",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "270",
                "AnswerString": "6-10 mph over",
                "AnswerIndex": 1,
                "AnswerTag": "Safety_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "271",
                "AnswerString": "11-15 mph over",
                "AnswerIndex": 2,
                "AnswerTag": "Safety_3",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "272",
                "AnswerString": "More than 15 mph over",
                "AnswerIndex": 3,
                "AnswerTag": "Safety_4",
                "AnswerType": "HQ_DEBIT"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "Label": "How close to the speed limit do you drive?",
            "Index": 39,
            "QuestionType": "RadioButton"
          },
          {
            "Id": "1039",
            "Orientation": "horizontal",
            "StepperLine": true,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 40,
            "PossibleAnswers": [
              {
                "Id": "273",
                "AnswerString": "0 times",
                "AnswerIndex": 0,
                "AnswerTag": "273",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "274",
                "AnswerString": "1 times",
                "AnswerIndex": 1,
                "AnswerTag": "Alcohol_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "275",
                "AnswerString": "2 times",
                "AnswerIndex": 2,
                "AnswerTag": "Alcohol_3",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "276",
                "AnswerString": "3 times",
                "AnswerIndex": 3,
                "AnswerTag": "Alcohol_4",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "277",
                "AnswerString": "More than 3 times",
                "AnswerIndex": 4,
                "AnswerTag": "Alcohol_5",
                "AnswerType": "HQ_DEBIT"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "Label": "How many times in the last 6 months were you in a car where the driver was under the influence of drugs or alcohol (including yourself)?",
            "Index": 40,
            "QuestionType": "RadioButton"
          }
        ]
      },
      {
        "Questions": [
          {
            "Id": "1040",
            "Orientation": "vertical",
            "StepperLine": false,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 41,
            "PossibleAnswers": [
              {
                "Id": "278",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Alcohol_5",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "279",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "Self_Care_2",
                "AnswerType": "HQ_DEBIT"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "Label": "Do you use sunblock?",
            "Index": 41,
            "QuestionType": "RadioButton"
          },
          {
            "Id": "1041",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "6",
            "AdditionalText": "",
            "QuestionOrder": 42,
            "PossibleAnswers": [
              {
                "Id": "280",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Safety_1",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "281",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "281",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "Do you spend a significant amount of time with any of the following?",
            "Label": "Excessive noise levels",
            "Index": 42,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1042",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "6",
            "AdditionalText": "",
            "QuestionOrder": 43,
            "PossibleAnswers": [
              {
                "Id": "282",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Safety_1",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "283",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "283",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "Do you spend a significant amount of time with any of the following?",
            "Label": "Excessive lifting or heavy loads",
            "Index": 43,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1043",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "6",
            "AdditionalText": "",
            "QuestionOrder": 44,
            "PossibleAnswers": [
              {
                "Id": "284",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Safety_1",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "285",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "285",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "Do you spend a significant amount of time with any of the following?",
            "Label": "Poorly designed work station",
            "Index": 44,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1044",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "6",
            "AdditionalText": "",
            "QuestionOrder": 45,
            "PossibleAnswers": [
              {
                "Id": "286",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Safety_1",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "287",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "287",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "Do you spend a significant amount of time with any of the following?",
            "Label": "Noxious fumes/toxins/hazardous chemicals",
            "Index": 45,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1045",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "6",
            "AdditionalText": "",
            "QuestionOrder": 46,
            "PossibleAnswers": [
              {
                "Id": "288",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Safety_1",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "289",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "289",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "Do you spend a significant amount of time with any of the following?",
            "Label": "Blood or blood products",
            "Index": 46,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1046",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "6",
            "AdditionalText": "",
            "QuestionOrder": 47,
            "PossibleAnswers": [
              {
                "Id": "290",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "290",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "291",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "291",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "Do you spend a significant amount of time with any of the following?",
            "Label": "None of the above",
            "Index": 47,
            "QuestionType": "Checkbox"
          }
        ]
      },
      {
        "Questions": [
          {
            "Id": "1047",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "7",
            "AdditionalText": "",
            "QuestionOrder": 48,
            "PossibleAnswers": [
              {
                "Id": "292",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_4",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "293",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "293",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In the past year, have you had any serious problems with the following?",
            "Label": "Death of a loved one",
            "Index": 48,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1048",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "7",
            "AdditionalText": "",
            "QuestionOrder": 49,
            "PossibleAnswers": [
              {
                "Id": "294",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "295",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "295",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In the past year, have you had any serious problems with the following?",
            "Label": "Depression",
            "Index": 49,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1049",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "7",
            "AdditionalText": "",
            "QuestionOrder": 50,
            "PossibleAnswers": [
              {
                "Id": "296",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_4",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "297",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "297",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In the past year, have you had any serious problems with the following?",
            "Label": "Divorce/separation",
            "Index": 50,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1050",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "7",
            "AdditionalText": "",
            "QuestionOrder": 51,
            "PossibleAnswers": [
              {
                "Id": "298",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "299",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "299",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In the past year, have you had any serious problems with the following?",
            "Label": "Family",
            "Index": 51,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1051",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "7",
            "AdditionalText": "",
            "QuestionOrder": 52,
            "PossibleAnswers": [
              {
                "Id": "300",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_4",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "301",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "301",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In the past year, have you had any serious problems with the following?",
            "Label": "Finances",
            "Index": 52,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1052",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "7",
            "AdditionalText": "",
            "QuestionOrder": 53,
            "PossibleAnswers": [
              {
                "Id": "302",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "303",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "303",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In the past year, have you had any serious problems with the following?",
            "Label": "Friend or co-worker",
            "Index": 53,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1053",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "7",
            "AdditionalText": "",
            "QuestionOrder": 54,
            "PossibleAnswers": [
              {
                "Id": "304",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "305",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "305",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In the past year, have you had any serious problems with the following?",
            "Label": "Health",
            "Index": 54,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1054",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "7",
            "AdditionalText": "",
            "QuestionOrder": 55,
            "PossibleAnswers": [
              {
                "Id": "306",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_3",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "307",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "307",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In the past year, have you had any serious problems with the following?",
            "Label": "Job loss",
            "Index": 55,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1055",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "7",
            "AdditionalText": "",
            "QuestionOrder": 56,
            "PossibleAnswers": [
              {
                "Id": "308",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_1",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "309",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "309",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In the past year, have you had any serious problems with the following?",
            "Label": "Job stress or anxiety",
            "Index": 56,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1056",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "7",
            "AdditionalText": "",
            "QuestionOrder": 57,
            "PossibleAnswers": [
              {
                "Id": "310",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_1",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "311",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "311",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In the past year, have you had any serious problems with the following?",
            "Label": "Job supervisor or manager",
            "Index": 57,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1057",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "7",
            "AdditionalText": "",
            "QuestionOrder": 58,
            "PossibleAnswers": [
              {
                "Id": "312",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_1",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "313",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "313",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In the past year, have you had any serious problems with the following?",
            "Label": "Lost work time/disability",
            "Index": 58,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1058",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "7",
            "AdditionalText": "",
            "QuestionOrder": 59,
            "PossibleAnswers": [
              {
                "Id": "314",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "315",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "315",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In the past year, have you had any serious problems with the following?",
            "Label": "Moving/relocation",
            "Index": 59,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1059",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "7",
            "AdditionalText": "",
            "QuestionOrder": 60,
            "PossibleAnswers": [
              {
                "Id": "316",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "317",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "317",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In the past year, have you had any serious problems with the following?",
            "Label": "Relationships",
            "Index": 60,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1060",
            "ParentQuestionId": "",
            "Orientation": "vertical",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "7",
            "AdditionalText": "",
            "QuestionOrder": 61,
            "PossibleAnswers": [
              {
                "Id": "318",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "319",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "319",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In the past year, have you had any serious problems with the following?",
            "Label": "Stress or anxiety (not job related)",
            "Index": 61,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1061",
            "Orientation": "vertical",
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "7",
            "AdditionalText": "",
            "QuestionOrder": 62,
            "PossibleAnswers": [
              {
                "Id": "320",
                "AnswerString": "Yes",
                "AnswerIndex": 0,
                "AnswerTag": "320",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              },
              {
                "Id": "321",
                "AnswerString": "No",
                "AnswerIndex": 1,
                "AnswerTag": "321",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "In the past year, have you had any serious problems with the following?",
            "Label": "None of the above",
            "Index": 62,
            "QuestionType": "Checkbox"
          },
          {
            "Id": "1062",
            "Orientation": "horizontal",
            "StepperLine": true,
            "ParentQuestionId": "",
            "ParentAnswerId": "",
            "SuggestedText": "Select",
            "QuestionGroupId": "",
            "AdditionalText": "",
            "QuestionOrder": 63,
            "PossibleAnswers": [
              {
                "Id": "322",
                "AnswerString": "None",
                "AnswerIndex": 0,
                "AnswerTag": "Stress_2",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "323",
                "AnswerString": "Some",
                "AnswerIndex": 1,
                "AnswerTag": "Stress_1",
                "AnswerType": "HQ_DEBIT"
              },
              {
                "Id": "324",
                "AnswerString": "A lot",
                "AnswerIndex": 2,
                "AnswerTag": "324",
                "AnswerType": "REPORTING_HRA_ANSWER_ID"
              }
            ],
            "Validators": [],
            "GroupLabel": "",
            "Label": "How often do you use stress reducing techniques, such as exercise, meditation, prayer, journaling, etc.",
            "Index": 63,
            "QuestionType": "RadioButton"
          }
        ]
      }
    ]
  }
}



export {questions};
