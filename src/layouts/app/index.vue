<template>
  <q-layout view="hhh lpR fFf">
    <!-- toolbar -->

    <Toolbar></Toolbar>

    <!-- ... -->

    <!-- drawer -->

    <Drawer>
      <template #help>
        <slot name="drawer-help"></slot>
      </template>

      <template #content>
        <slot name="drawer-content"></slot>
      </template>
    </Drawer>

    <!-- ... -->

    <!-- page container -->

    <q-page-container>
      <!-- page header -->

      <!-- ... -->

      <!-- page content -->

      <slot name="page-content"></slot>

      <!-- ... -->
    </q-page-container>

    <!-- ... -->
  </q-layout>
</template>

<script>
const Toolbar = () => import("./components/toolbar/index");
const Drawer = () => import("./components/drawer/index");

export default {
  name: "AppLayout",

  components: { Toolbar, Drawer },
};
</script>

<style lang="scss" scoped></style>
