<template>
  <div class="container">
    <div class="calculatorWrap">
      <div class="resultWrap">
        <div class="result">
          <p class="valueWrap">{{ result }}</p>
        </div>
      </div>
      <div class="inputWrap">
        <input
          type="button"
          class="operator op-header"
          @click="clear()"
          value="C"
        />
        <input
          type="button"
          class="operator op-header"
          @click="inputDelete()"
          value="dell"
        />
        <input
          type="button"
          class="operator op-header"
          @click="operatorClick($event.target)"
          value="%"
        />
        <input
          type="button"
          class="operator"
          @click="operatorClick($event.target)"
          value="/"
        />
        <input
          type="button"
          class="number"
          @click="numberClick($event.target)"
          value="7"
        />
        <input
          type="button"
          class="number"
          @click="numberClick($event.target)"
          value="8"
        />
        <input
          type="button"
          class="number"
          @click="numberClick($event.target)"
          value="9"
        />
        <input
          type="button"
          class="operator"
          @click="operatorClick($event.target)"
          value="*"
        />
        <input
          type="button"
          class="number"
          @click="numberClick($event.target)"
          value="4"
        />
        <input
          type="button"
          class="number"
          @click="numberClick($event.target)"
          value="5"
        />
        <input
          type="button"
          class="number"
          @click="numberClick($event.target)"
          value="6"
        />
        <input
          type="button"
          class="operator"
          @click="operatorClick($event.target)"
          value="-"
        />
        <input
          type="button"
          class="number"
          @click="numberClick($event.target)"
          value="1"
        />
        <input
          type="button"
          class="number"
          @click="numberClick($event.target)"
          value="2"
        />
        <input
          type="button"
          class="number"
          @click="numberClick($event.target)"
          value="3"
        />
        <input
          type="button"
          class="operator"
          @click="operatorClick($event.target)"
          value="+"
        />
        <input
          type="button"
          class="number zero"
          @click="numberClick($event.target)"
          value="0"
        />
        <input
          type="button"
          class="number"
          @click="numberClick($event.target)"
          value="."
        />
        <input
          type="button"
          class="operator"
          @click="operatorClick($event.target)"
          value="="
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lesson3",
  data() {
    return {
      result: "0",
      temp: "",
      calculate: "",
      operator: "",
      click: "",
    };
  },
  methods: {
    numberClick: function (e) {
      var operator = document.getElementsByClassName("operator");
      Array.prototype.forEach.call(operator, (el) => {
        el.classList.remove("isClick");
      });

      if (this.click == "operator") {
        this.temp = "";
        this.click = null;
      }

      if (Number.isInteger(this.temp)) {
        this.temp = "";
        this.calculate = this.temp;
      }

      this.temp += e.value;
      this.calculate += e.value;
      this.result = this.temp;

      console.log(this.temp);
      console.log(this.calculate);
    },
    operatorClick: function (e) {
      this.result = eval(this.calculate);

      e.classList.add("isClick");

      if (e.value == "=") {
        this.temp = this.result;
        this.calculate = "";
      } else {
        this.temp = e.value;
      }

      this.click = e.classList[0];

      this.calculate += this.temp;

      if (this.result == undefined) {
        this.result = "0";
        this.temp = "";
        this.calculate = this.temp;
      }
    },
    clear: function () {
      var operator = document.getElementsByClassName("operator");
      Array.prototype.forEach.call(operator, (el) => {
        el.classList.remove("isClick");
      });
      this.result = "0";
      this.temp = "";
      this.calculate = this.temp;
    },

    inputDelete: function () {
      this.result = this.result.substring(0, this.result.length - 1);

      if (this.result.length >= 0) {
        this.calculate = this.calculate.substring(0, this.calculate.length - 1);
      }

      if (this.result.length == 0) {
        this.result = "0";
      }
      this.temp = this.result == "0" ? "" : this.result;
      console.log(this.calculate);
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  .calculatorWrap {
    background: #f5f5f5;
    border: 1px solvalue #6e6e6e;
    width: 250px;
    height: auto;
    border-radius: 5px;
    background-color: #424345;

    .resultWrap {
      .result {
        .valueWrap {
          margin: 10px;
          color: #fff;
          font-size: 30px;
          text-align: right;
        }
      }
    }

    .inputWrap {
      input {
        color: #f5f5f5;
        background-color: #616163;
        margin: 1px;
        width: 24%;
        height: 50px;
        float: left;
        border-width: 0;
        font-size: 20px;
        cursor: pointer;
        border-radius: 10px;
        outline: none;
      }

      .op-header {
        background-color: #616163 !important;
      }

      .operator {
        background-color: #f49e3f !important;
      }

      .isClick {
        background-color: #f5f5f5 !important;
        color: #080808;
      }

      .zero {
        width: 49%;
      }
    }
  }
}
</style>

