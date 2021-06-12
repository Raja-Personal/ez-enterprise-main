<template>
  <q-header class="bg-white">
    <q-toolbar class="no-padding" style="height: 56px">
      <!-- legend -->

      <EzLegend color="primary">
        <img src="@/assets/logo/mark-white.png" height="20" />
      </EzLegend>

      <!-- ... -->

      <!-- logo -->

      <div class="row items-center q-pl-md q-mb-xs" style="width: 268px">
        <img src="@/assets/logo/logo-full.png" height="36" />
      </div>

      <!-- ... -->

      <q-space></q-space>

      <!-- client logo -->

      <ClientLogo></ClientLogo>

      <!-- ... -->

      <!-- notifications -->

      <Notifications class="q-mx-md"></Notifications>

      <!-- ... -->

      <!-- profile -->

      <Profile class="q-mx-md"></Profile>

      <!-- ... -->
    </q-toolbar>
  </q-header>
</template>

<script>
const EzLegend = () => import("@/library/components/ez-legend/index");

const ClientLogo = () => import("./components/client-logo/index");
const Notifications = () => import("./components/notifications/index");
const Profile = () => import("./components/profile/index");

export default {
  name: "Toolbar",

  components: { EzLegend, ClientLogo, Notifications, Profile },
};
</script>

<style lang="scss" scoped></style>
