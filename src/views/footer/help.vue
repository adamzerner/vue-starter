<template>
  <section class="help">
    <page-header>Help</page-header>
    <b-card bg-variant="light">
      <b-card-text>
        <section v-for="(category, i) in categories" v-bind:key="category.name">
          <div>
            <a v-bind:href="`#category-${i + 1}`">{{ category.name }}</a>
          </div>
          <ul>
            <li
              v-for="(question, j) in category.questions"
              v-bind:key="question.question"
            >
              <a v-bind:href="`#question-${i + 1}-${j + 1}`">
                {{ question.question }}
              </a>
            </li>
          </ul>
        </section>
      </b-card-text>
    </b-card>
    <section class="answers">
      <section v-for="(category, i) in categories" v-bind:key="category.name">
        <h4 v-bind:id="`category-${i + 1}`">{{ category.name }}</h4>
        <section
          v-for="(question, j) in category.questions"
          v-bind:key="question.question"
        >
          <h5 v-bind:id="`question-${i + 1}-${j + 1}`">
            {{ question.question }}
          </h5>
          <p v-html="question.answer"></p>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import PageHeader from "@/components/page-header/page-header.vue";

export default {
  name: "help",
  components: {
    "page-header": PageHeader,
  },
  data() {
    return {
      categories: [
        {
          name: "Category 1",
          questions: [
            {
              question:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              question:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              question:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          ],
        },
        {
          name: "Category 2",
          questions: [
            {
              question:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              question:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              question:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          ],
        },
        {
          name: "Category 3",
          questions: [
            {
              question:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              question:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              question:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.help {
  max-width: 750px;
}
.answers {
  margin-top: 50px;
}
h4 {
  margin-top: 50px;
}
h5 {
  margin-top: 25px;
}
</style>
