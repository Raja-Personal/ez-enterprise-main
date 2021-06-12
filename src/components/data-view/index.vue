<template>
  <div class="q-pa-lg">
    <!-- action bar -->

    <ActionBar :keys="keys" @sort="setSortData" @group="setGroupData">
      <template #nav>
        <slot name="nav"></slot>
      </template>

      <template #breadcrumbs>
        <slot name="breadcrumbs"></slot>
      </template>
    </ActionBar>

    <!-- ... -->

    <div class="row items-center q-col-gutter-sm q-mb-lg">
      <!-- sort -->

      <div v-if="sortOrder" class="col-auto">
        <EzChip
          :label="`Sort by: ${sortKey} (${
            sortOrder === 'ASC' ? 'A to Z' : 'Z to A'
          })`"
          is-removable
          is-active
          active-color="indigo"
          @remove="clearSort"
        ></EzChip>
      </div>

      <!-- ... -->

      <!-- group -->
      <div v-if="groupKey" class="col-auto">
        <EzChip
          :label="`Group by: ${groupKey}`"
          is-removable
          is-active
          active-color="deep-orange"
          @remove="clearGroup"
        ></EzChip>

        <!-- ... -->
      </div>
    </div>

    <!-- cards -->

    <div
      v-for="(value, key) in _items"
      :key="key"
      class="q-mt-sm"
      style="min-height: 420px"
    >
      <!-- group name -->

      <div
        v-if="key"
        class="q-py-lg q-px-xs row items-center cursor-pointer"
        @click="minimizeGroup(key)"
      >
        <div class="label-2 text-deep-orange text-weight-bold text-uppercase">
          {{ key }}
        </div>

        <!-- indicator -->

        <q-icon
          name="expand_more"
          color="gray-5"
          size="20px"
          class="q-ml-sm"
          :class="isGroupMinimized(key) ? 'inactive' : 'active'"
        ></q-icon>

        <!-- ... -->
      </div>

      <!-- ... -->

      <!-- grouped rows -->

      <div v-if="!isGroupMinimized(key)" class="row q-col-gutter-md">
        <!-- card -->

        <div v-for="item in value" :key="item.id" :class="contentClass">
          <slot :item="item"></slot>
        </div>

        <!-- ... -->

        <!-- new card -->

        <div v-if="!key" :class="contentClass">
          <slot name="addNew"></slot>
        </div>

        <!-- ... -->
      </div>
    </div>

    <!-- ... -->

    <!-- pagination -->

    <div class="q-my-xl">
      <EzPagination
        :current-page="currentPage"
        :total-items="totalItems"
        :items-per-page="itemsPerPage"
        :item-from="itemFrom"
        :item-to="itemTo"
        @goto="gotoPage"
        @change="changeItemsPerPage"
      ></EzPagination>
    </div>

    <!-- ... -->
  </div>
</template>

<script>
import { sortBy, groupBy } from "lodash";

const EzChip = () => import("@/library/components/ez-chip/index");
const EzPagination = () => import("@/library/components/ez-pagination/index");

const ActionBar = () => import("./components/action-bar/index");

export default {
  name: "DataView",

  components: { EzChip, EzPagination, ActionBar },

  props: {
    keys: {
      type: Array,
      required: true,
    },

    items: {
      type: Array,
      required: true,
    },

    contentClass: {
      type: String,
      default: "col",
    },
  },

  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
      sortKey: "",
      sortOrder: "",
      groupKey: "",
      minimizedGroups: [],
    };
  },

  computed: {
    totalItems() {
      return this.items.length;
    },

    itemFrom() {
      if (!this.totalItems) return 0;
      else return (this.currentPage - 1) * this.itemsPerPage;
    },

    itemTo() {
      if (!this.totalItems) {
        return 0;
      } else {
        return this.currentPage * this.itemsPerPage > this.totalItems
          ? this.totalItems
          : this.currentPage * this.itemsPerPage;
      }
    },

    _items() {
      let items = [];

      items = this.getSortedItems(this.items);
      items = this.getCurrentPageItems(items);
      items = this.getGroupedItems(items);

      return items;
    },
  },

  methods: {
    /* sort items */

    setSortData(payload) {
      this.sortKey = payload.sortKey;
      this.sortOrder = payload.sortOrder;
    },

    getSortedItems(items) {
      if (!this.sortKey || !this.sortOrder) return items;

      const sortedItems = sortBy(items, this.sortKey);
      return this.sortOrder === "DESC" ? sortedItems.reverse() : sortedItems;
    },

    clearSort() {
      this.sortKey = "";
      this.sortOrder = "";
    },

    /* ... */

    /* paginate items */

    gotoPage(page) {
      this.currentPage = page;
    },

    changeItemsPerPage(itemsCount) {
      this.currentPage = 1;
      this.itemsPerPage = itemsCount;
    },

    getCurrentPageItems(items) {
      if (this.itemTo > this.items.length) {
        this.$emit("loadMore");
      } else {
        return items.slice(this.itemFrom, this.itemTo);
      }
    },

    clearPagination() {
      this.currentPage = 1;
    },

    /* ... */

    /* group items */

    setGroupData(payload) {
      this.groupKey = payload.groupKey;
    },

    getGroupedItems(items) {
      let groupedItems = {};

      if (!this.groupKey) groupedItems = { "": items };
      else groupedItems = groupBy(items, this.groupKey);

      return groupedItems;
    },

    clearGroup() {
      this.groupKey = "";
    },

    minimizeGroup(group) {
      const idx = this.minimizedGroups.indexOf(group);

      if (idx === -1) this.minimizedGroups.push(group);
      else this.minimizedGroups.splice(idx, 1);
    },

    isGroupMinimized(group) {
      const idx = this.minimizedGroups.indexOf(group);
      return idx >= 0;
    },

    /* ... */
  },
};
</script>

<style lang="scss" scoped>
.active {
  transition: transform 0.25s;
  transform: rotate(180deg);
}

.inactive {
  transition: transform 0.25s;
}
</style>
