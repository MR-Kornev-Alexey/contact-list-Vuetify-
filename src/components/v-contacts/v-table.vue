<template>
  <div class="v-table" :users_data="USERS">
    <h1 class="mt-4 mb-4">Лист контактов</h1>
    <v-flex class="d-flex justify-space-between">
      <div>
        <vInputPopUp />
      </div>
      <div class="d-flex">
        <v-icon class="search-icon" @click="searchContact">
          mdi-account-search</v-icon
        >
        <v-text-field
          class="search"
          placeholder="поиск контакта..."
          color="#222c56"
          name="search"
          type="text"
          required
          @keyup.enter="searchContact"
          v-model="search"
        ></v-text-field>
      </div>
    </v-flex>

    <div class="v-table__header mt-4">
      <p class="user_avatar">Аватар</p>
      <p class="d-flex justify-center text-center  user_change">Изменить</p>

      <p
        class="d-flex justify-center text-center user_name"
        @click="sortByName"
      >
        Имя
        <v-icon> mdi-unfold-more-horizontal</v-icon>
      </p>
      <p class="d-flex justify-center text-center user_phone">
        Телефон
      </p>
      <p class="d-flex justify-center text-center user_email">
        E-mail
      </p>
      <p
        class="d-flex justify-center text-center user_department"
        @click="sortByDepartment"
      >
        Отдел
        <v-icon> mdi-unfold-more-horizontal</v-icon>
      </p>
      <p class="d-flex justify-center text-center  user_change">Удалить</p>
    </div>
    <div class="v-table__body">
      <v-table-row
        v-for="row in paginationUsers"
        :key="row.id"
        v-bind:row_data="row"
      />
    </div>
    <div class="v-table__pagination">
      <div
        class="page"
        v-for="page in pages"
        :key="page"
        @click="pageClick(page)"
        :class="{ page__selected: page === pageNumber }"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import vTableRow from "./v-table-row";
import vInputPopUp from "./v-input-popup";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-table",
  components: {
    vTableRow,
    vInputPopUp
  },
  props: {
    user_data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      userPerPage: 10,
      pageNumber: 1,
      search: ""
    };
  },
  computed: {
    ...mapGetters(["USERS"]),
    pages() {
      return Math.ceil(this.USERS.length / 10);
    },
    paginationUsers() {
      const from = (this.pageNumber - 1) * this.userPerPage;
      const to = from + this.userPerPage;
      return this.USERS.slice(from, to);
    }
  },
  methods: {
    searchContact: function() {
      let value = this.search;
      this.$store
        .dispatch("API_SEARCH", value)
        .then(function(response) {
          this.$router.push("/contacts");
          return response;
        })
        .catch(err => err);
    },
    ...mapActions(["GET_USERS_FROM_API"]),
    pageClick(page) {
      this.pageNumber = page;
    },
    sortByDepartment() {
      this.USERS.sort((a, b) => a.department.localeCompare(b.department));
    },
    sortByName() {
      this.USERS.sort((a, b) => a.name.localeCompare(b.name));
    }
  },
  mounted() {
    this.GET_USERS_FROM_API();
  }
};
</script>

<style lang="scss">
.search-icon {
  cursor: pointer;
    margin-right: 6px;
    padding-bottom: 6px;
}
.search {
  padding: 0;
  margin: 0;
  width: 300px;
}

.v-table {
  max-width: 1100px;
  margin: 0 auto;
}

.v-table__header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #aeaeae;
}

.v-table__header p {
  display: flex;
  align-items: center;
  text-align: left;
  cursor: pointer;
}

.user_avatar {
  width: 50px;

  img {
    cursor: pointer;
  }
}

.user_name {
  width: 180px;
}

.user_change,
.user_department {
  width: 90px;
  text-align: center;
}

.user_phone {
  width: 160px;
}

.user_email {
  width: 240px;
}

.v-table__pagination {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.page {
  padding-top: 6px;
  width: 36px;
  height: 36px;
  border: 1px solid #aeaeae;
  cursor: pointer;
  text-align: center;
}

.page:hover {
  background: #222c56;
  color: white;
}

.page__selected {
  background: #222c56;
  color: white;
}
</style>
