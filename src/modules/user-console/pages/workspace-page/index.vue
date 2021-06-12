<template>
  <Layout>
    <!-- drawer help -->

    <template #drawer-help>
      <!-- workspace tour -->

      <MediaCard class="q-px-md">
        <template #caption>
          Learn all about the Workspace by watching the 5 minute video
        </template>

        <template #media>
          <img
            src="@/assets/video.png"
            alt="product tour"
            style="max-width: 100%"
          />
        </template>
      </MediaCard>

      <!-- ... -->
    </template>

    <!-- ... -->

    <!-- drawer content -->

    <template #drawer-content>
      <!-- quick access -->

      <div class="q-px-md">
        <div class="label-2 text-gray-5 q-mb-md">Quick access</div>

        <QuickAccessCard
          v-for="card in quickAccessCards"
          :key="card.id"
          :icon="card.icon"
          :active-icon="card.activeIcon"
          class="q-mb-md"
        >
          <template #title> {{ card.text }}</template>

          <template #description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nemo
            odio quid, incidunt qui veritatis
          </template>
        </QuickAccessCard>
      </div>

      <!-- ... -->
    </template>

    <!-- ... -->

    <!-- page content -->

    <template #page-content>
      <!-- navigation -->

      <div class="bg-white row items-center" style="height: 52px">
        <!-- tabs -->

        <EzTabs v-model="activeTab" :tabs="tabs" class="col"></EzTabs>

        <!-- ... -->

        <!-- cta -->

        <EzButton
          v-if="cta === 'ADD_WORKSPACE'"
          icon-left="eva-plus"
          label="add workspace"
          class="q-mr-md"
        ></EzButton>

        <EzButton
          v-if="cta === 'UPLOAD_FILES'"
          icon-left="eva-cloud-upload-outline"
          label="upload files"
          class="q-mr-md"
        ></EzButton>

        <!-- ... -->
      </div>

      <!-- ... -->

      <!-- content -->

      <router-view></router-view>

      <!-- ... -->
    </template>

    <!-- ... -->
  </Layout>
</template>

<script>
import { mapState } from "vuex";

const Layout = () => import("@/layouts/app/index");

const EzTabs = () => import("@/library/components/ez-tabs/index");
const EzButton = () => import("@/library/components/ez-button/index");

const MediaCard = () => import("@/components/media-card/index");
const QuickAccessCard = () => import("@/components/quick-access-card/index");

export default {
  name: "WorkspacePage",

  components: {
    Layout,
    EzTabs,
    EzButton,
    MediaCard,
    QuickAccessCard,
  },

  data() {
    return {
      quickAccessCards: [
        {
          id: this.$nano.id(),
          text: "Create a new Workspace",
          icon: "eva-plus",
          activeIcon: "eva-plus",
          route: "",
          for: ["ADMIN"],
        },
        {
          id: this.$nano.id(),
          text: "Restrict access to a Workspace",
          icon: "eva-shield-outline",
          activeIcon: "eva-shield",
          route: "",
          for: ["ADMIN"],
        },
        {
          id: this.$nano.id(),
          text: "Browse files in a Workspace",
          icon: "eva-folder-outline",
          activeIcon: "eva-folder",
          route: "",
          for: ["ADMIN", "USER"],
        },
        {
          id: this.$nano.id(),
          text: "Upload files to a Workspace",
          icon: "eva-cloud-upload-outline",
          activeIcon: "eva-cloud-upload",
          route: "",
          for: ["ADMIN", "USER"],
        },
        {
          id: this.$nano.id(),
          text: "Request access to a Workplace",
          icon: "eva-shield-outline",
          activeIcon: "eva-shield",
          route: "",
          for: ["ADMIN", "USER"],
        },
      ],
      tabs: [
        {
          id: this.$nano.id(),
          label: "overview",
          value: "workspace-overview",
          icon: "o_dashboard",
          activeIcon: "dashboard",
        },
        {
          id: this.$nano.id(),
          label: "upload",
          value: "workspace-upload",
          icon: "eva-cloud-upload-outline",
          activeIcon: "eva-cloud-upload",
        },
        {
          id: this.$nano.id(),
          label: "browse",
          value: "browse-workspace",
          icon: "eva-folder-outline",
          activeIcon: "eva-folder",
        },
        {
          id: this.$nano.id(),
          label: "search",
          value: "search-workspace",
          icon: "eva-search-outline",
          activeIcon: "eva-search",
        },
        {
          id: this.$nano.id(),
          label: "bookmark",
          value: "bookmark-workspace",
          icon: "eva-bookmark-outline",
          activeIcon: "eva-bookmark",
        },
        {
          id: this.$nano.id(),
          label: "report",
          value: "workspace-report",
          icon: "eva-pie-chart-outline",
          activeIcon: "eva-pie-chart",
        },
        {
          id: this.$nano.id(),
          label: "settings",
          value: "workspace-settings",
          icon: "eva-settings-2-outline",
          activeIcon: "eva-settings-2",
        },
      ],
      activeTab: "",
    };
  },

  computed: {
    ...mapState(["cta"]),
  },

  watch: {
    activeTab() {
      this.$router.push({ name: this.activeTab });
    },
  },
};
</script>

<style lang="scss" scoped></style>
