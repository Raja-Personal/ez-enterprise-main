<template>
  <div>
    <!-- workspaces -->

    <DataView :keys="keys" :items="_files" content-class="col-md-4 col-lg-3">
      <template #nav>
        <!-- file up -->

        <EzFab
          :size="8"
          is-flat
          icon="eva-arrow-back"
          color="gray-6"
          class="border border-gray-3 q-mr-md"
          @click="closeFile"
        ></EzFab>

        <!-- ... -->
      </template>

      <template #breadcrumbs>
        <q-breadcrumbs-el label="Dashboard" :to="{ name: 'dashboard' }" />
        <q-breadcrumbs-el label="Workspace" />
        <q-breadcrumbs-el label="Browse" />
        <q-breadcrumbs-el label="Leave Requests" />
      </template>

      <template #default="{ item }">
        <FileCard :file="item" @click="onClick" @openMenu="openMenu"></FileCard>
      </template>
    </DataView>

    <!-- ... -->
  </div>
</template>

<script>
const EzFab = () => import("@/library/components/ez-fab/index");
const DataView = () => import("@/components/data-view/index");
const FileCard = () => import("./components/file-card/index");

export default {
  name: "FileView",

  components: {
    EzFab,
    DataView,
    FileCard,
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
      ],
      folders: [
        {
          id: this.$nano.id(),
          name: "Charles Vinoth",
          type: "folder",
          fileCount: 245,
          usedSpace: 0.8,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "James Anderson",
          type: "folder",
          fileCount: 0,
          usedSpace: 0,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "Joe Biden",
          type: "folder",
          fileCount: 18,
          usedSpace: 0.1,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "Edin Noah",
          type: "folder",
          fileCount: 57,
          usedSpace: 0.2,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "Jonisha Hathlyn",
          type: "folder",
          fileCount: 0,
          usedSpace: 0,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "Jason Statham",
          type: "folder",
          fileCount: 5,
          usedSpace: 0.1,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "Jimmy Nesham",
          type: "folder",
          fileCount: 17,
          usedSpace: 0.1,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "Mark Collingwood",
          type: "folder",
          fileCount: 0,
          usedSpace: 0,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "Deborah Jason",
          type: "folder",
          fileCount: 124,
          usedSpace: 0.3,
          isFavorite: false,
          isDeleted: false,
        },
      ],
      files: [
        {
          id: this.$nano.id(),
          name: "IN-9091",
          type: "pdf",
          fileCount: 0,
          usedSpace: 0,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "IN-9092",
          type: "pdf",
          fileCount: 0,
          usedSpace: 0,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "MO-9095",
          type: "jpg",
          fileCount: 0,
          usedSpace: 0,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "IN-9093",
          type: "pdf",
          fileCount: 0,
          usedSpace: 0,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "WA-9091",
          type: "docx",
          fileCount: 0,
          usedSpace: 0,
          isFavorite: false,
          isDeleted: false,
        },
        {
          id: this.$nano.id(),
          name: "BR-9095",
          type: "pptx",
          fileCount: 0,
          usedSpace: 0,
          isFavorite: false,
          isDeleted: false,
        },
      ],
      showFiles: false,
      showProperties: false,
    };
  },

  computed: {
    _files() {
      return this.showFiles ? this.files : this.folders;
    },
  },

  methods: {
    onClick(fileId) {
      const idx = this._files.findIndex((_file) => _file.id === fileId);

      if (this._files[idx].fileCount) this.showFiles = true;
    },

    openMenu(menu) {
      if (menu === "properties") this.showProperties = !this.showProperties;
    },

    closeFile() {
      if (this.showFiles) this.showFiles = false;
      else this.$emit("closeFile");
    },
  },
};
</script>

<style lang="scss" scoped></style>
