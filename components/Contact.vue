<template>
  <b-form action="https://formspree.io/baldwinjkaleb@gmail.com" method="POST">
    <b-form-row>
      <b-col>
        <b-form-group label="First Name" label-for="first-name-input">
          <b-input id="first-name-input" placeholder="first name" type="text" name="first-name" v-model.trim="firstName.value" :state="firstName.isValid" @input="firstName.validate(firstName)" />
          <b-form-invalid-feedback>No need for mystery here</b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Last Name" label-for="last-name-input">
          <b-input id="last-name-input" placeholder="last name" type="text" name="last-name" v-model.trim="lastName.value" :state="lastName.isValid" @input="lastName.validate(lastName)" />
          <b-form-invalid-feedback>You can use a pseudonym if you prefer</b-form-invalid-feedback>
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-group label="Email" label-for="email" description="So I can get back with you. I promise I won't give it away">
      <b-input id="email-input" placeholder="email" type="email" name="email" v-model.trim="email.value" :state="email.isValid" @input="email.validate(email)" />
      <b-form-invalid-feedback>Enter a valid email so I know how to contact you</b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Subject" label-for="subject">
      <b-input id="subject-input" placeholder="subject" type="text" name="subject" v-model="subject.value" :state="subject.isValid" @input="subject.validate(subject)" />
    </b-form-group>
    <b-form-group label="Description" label-for="description-input" description="Let me know why you're contacting me">
      <b-form-textarea id="description-input" placeholder="description" name="description" :rows="3" :max-rows="6" v-model="description.value" :state="description.isValid" @input="description.validate(description)" />
      <b-form-invalid-feedback>I'm gonna need more than that</b-form-invalid-feedback>
    </b-form-group>
    <b-row align-h="between">
      <b-col cols="3">
        <b-form-group description="I have trust issues">
          <b-input-group :prepend="`${question.equation}=`">
            <b-input id="solution-input" type="text" name="solution-input" v-model="solution.value" :state="solution.isValid" @input="solution.validate(solution, question.answer)" />
            <b-form-invalid-feedback>Well this is awkward</b-form-invalid-feedback>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col cols="2">
        <b-button type="submit" variant="primary">SEND</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import randomNumberInRange from '~/util/random-number-in-range.js'
import emailRegex from '~/util/email-regex.js'
import _debounce from 'lodash.debounce'

export default {
  data: () => ({
    firstName: {
      value: '',
      isValid: null,
      validate: _debounce((firstName) => firstName.isValid = (firstName.value != ''), 500)
    },
    lastName: {
      value: '',
      isValid: null,
      validate: _debounce((lastName) => lastName.isValid = (lastName.value != ''), 500)
    },
    email: {
      value: '',
      isValid: null,
      validate: _debounce((email) => email.isValid = emailRegex(email.value), 500)
    },
    subject: {
      value: '',
      isValid: null,
      validate: _debounce((subject) => subject.isValid = (subject.value != ''), 500)
    },
    description: {
      value: '',
      isValid: null,
      validate: _debounce((description) => description.isValid = (description.value.length > 50), 500)
    },
    solution: {
      value: '',
      isValid: null,
      validate: _debounce((solution, expected) => solution.isValid = (solution.value == expected), 500)
    },
    question: {
      equation: '',
      answer: null
    }
  }),
  methods: {
    generateQuestion() {
      let operators = ['+', '-', '*'];
      let operand1 = randomNumberInRange(1, 10);
      let operand2 = randomNumberInRange(1, 10);
      let operator = operators[randomNumberInRange(0, operators.length)];
      this.question.equation = `${operand1}${operator}${operand2}`;
      this.question.answer = eval(this.question.equation);
    },
    validateFormField: function(field, expectedValue) {
      field.isValid = field.validate(field.value, expectedValue);
    },
  },
  mounted() {
    this.generateQuestion();
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 40vw;
  .input-group-prepend {
    font-family: Courier, sans-serif;
  }
}
</style>
