<template>
  <div>
    <!-- workspaces -->

    <DataView
      :keys="keys"
      :items="workspaces"
      content-class="col-md-4 col-lg-3"
    >
      <template #breadcrumbs>
        <q-breadcrumbs-el label="Dashboard" :to="{ name: 'dashboard' }" />
        <q-breadcrumbs-el label="Workspace" />
        <q-breadcrumbs-el label="Browse" />
      </template>

      <template #default="{ item }">
        <WorkspaceCard
          :workspace="item"
          @click="onClick"
          @openMenu="openMenu"
          @toggleFavorite="toggleFavorite"
        ></WorkspaceCard>
      </template>

      <template #addNew>
        <AddNewCard class="full-height">
          <template #title>Add new Workspace</template>

          <template #description> Lorem, ipsum dolor sit amet elit </template>
        </AddNewCard>
      </template>
    </DataView>

    <!-- ... -->

    <!-- properties -->

    <WorkspaceProps
      v-model="showProperties"
      :properties="properties"
    ></WorkspaceProps>

    <!-- ... -->
  </div>
</template>

<script>
const DataView = () => import("@/components/data-view/index");
const AddNewCard = () =>
  import("@/components/data-view/components/add-new-card/index");

const WorkspaceCard = () => import("./components/workspace-card/index");
const WorkspaceProps = () => import("./components/workspace-props/index");

export default {
  name: "WorkspaceView",

  components: {
    DataView,
    WorkspaceCard,
    WorkspaceProps,
    AddNewCard,
  },

  data() {
    return {
      keys: [
        {
          id: this.$nano.id(),
          label: "name",
          name: "name",
          isVisible: true,
          isSortable: true,
          isGroupable: false,
          dataType: "STRING",
        },
        {
          id: this.$nano.id(),
          label: "status",
          name: "isDeleted",
          isVisible: true,
          isSortable: true,
          isGroupable: true,
          dataType: "STRING",
        },
        {
          id: this.$nano.id(),
          label: "file count",
          name: "fileCount",
          isVisible: true,
          isSortable: true,
          isGroupable: false,
          dataType: "NUMBER",
        },
        {
          id: this.$nano.id(),
          label: "workflow count",
          name: "workflowCount",
          isVisible: true,
          isSortable: true,
          isGroupable: false,
          dataType: "NUMBER",
        },
        {
          id: this.$nano.id(),
          label: "used space",
          name: "usedSpace",
          isVisible: true,
          isSortable: true,
          isGroupable: false,
          dataType: "NUMBER",
        },
      ],
      workspaces: [
        {
          id: this.$nano.id(),
          name: "Accounts",
          description: "Lorem ipsum dolor sit amet consectetur elit",
          fileCount: 234,
          workflowCount: 2,
          portalCount: 5,
          taskCount: 2,
          availableSpace: 5.0,
          usedSpace: 1.3,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "HR",
          description: "Lorem ipsum dolor sit amet elit",
          fileCount: 56,
          workflowCount: 0,
          portalCount: 5,
          taskCount: 2,
          availableSpace: 5.0,
          usedSpace: 0.4,
          isFavorite: true,
          isDeleted: true,
        },
        {
          id: this.$nano.id(),
          name: "IT Requests",
          description: "Lorem ipsum dolor sit amet consectetur elit",
          fileCount: 178,
          workflowCount: 0,
          portalCount: 5,
          taskCount: 2,
          availableSpace: 5.0,
          usedSpace: 0.9,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "Leave Requests",
          description: "Lorem ipsum dolor sit amet consectetur elit",
          fileCount: 97,
          workflowCount: 1,
          portalCount: 5,
          taskCount: 2,
          availableSpace: 5.0,
          usedSpace: 0.4,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "Sales",
          description: "Lorem ipsum dolor sit amet consectetur elit",
          fileCount: 57,
          workflowCount: 1,
          portalCount: 5,
          taskCount: 2,
          availableSpace: 5.0,
          usedSpace: 0.1,
          isFavorite: false,
          isDeleted: true,
        },
        {
          id: this.$nano.id(),
          name: "Marketing",
          description: "Lorem ipsum dolor sit amet consectetur elit",
          fileCount: 140,
          workflowCount: 1,
          portalCount: 5,
          taskCount: 2,
          availableSpace: 5.0,
          usedSpace: 0.8,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "Reimbursement Request",
          description: "Lorem ipsum dolor sit amet consectetur elit",
          fileCount: 10,
          workflowCount: 0,
          portalCount: 5,
          taskCount: 2,
          availableSpace: 5.0,
          usedSpace: 0.1,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "Legal",
          description: "Lorem ipsum dolor sit amet consectetur elit",
          fileCount: 27,
          workflowCount: 0,
          portalCount: 5,
          taskCount: 2,
          availableSpace: 5.0,
          usedSpace: 0.1,
          isFavorite: false,
          isDeleted: true,
        },
        {
          id: this.$nano.id(),
          name: "Hardware Request",
          description: "Lorem ipsum dolor sit amet consectetur elit",
          fileCount: 10,
          workflowCount: 0,
          portalCount: 5,
          taskCount: 2,
          availableSpace: 5.0,
          usedSpace: 0.1,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "Grievance",
          description: "Lorem ipsum dolor sit amet consectetur elit",
          fileCount: 10,
          workflowCount: 0,
          portalCount: 5,
          taskCount: 2,
          availableSpace: 5.0,
          usedSpace: 0.1,
          isFavorite: false,
          isDeleted: false,
        },
      ],
      showProperties: false,
      properties: [
        {
          id: this.$nano.id(),
          label: "name",
          value: "IT Requests",
        },
        {
          id: this.$nano.id(),
          label: "description",
          value: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
          id: this.$nano.id(),
          label: "status",
          value: "Active",
        },
        {
          id: this.$nano.id(),
          label: "files",
          value: "Contains 258 files",
        },
        {
          id: this.$nano.id(),
          label: "storage",
          value: "0.9 GB used of 5.0 GB",
        },
        {
          id: this.$nano.id(),
          label: "workflows",
          value: "1 workflow connected",
        },
        {
          id: this.$nano.id(),
          label: "portals",
          value: "2 portals connected",
        },
      ],
    };
  },

  methods: {
    onClick(workspaceId) {
      this.$emit("openFile", workspaceId);
    },

    openMenu(menu) {
      if (menu === "properties") this.showProperties = !this.showProperties;
    },

    toggleFavorite(workspaceId) {
      const idx = this.workspaces.findIndex(
        (_workspace) => _workspace.id === workspaceId
      );
      this.workspaces[idx].isFavorite = !this.workspaces[idx].isFavorite;
    },
  },
};
</script>

<style lang="scss" scoped></style>
