<template>
  <Layout>
    <template #drawer-help>
      <div class="q-px-md">
        <!-- get started -->

        <div class="text-3 text-gray-6 q-mb-md">Get started</div>

        <div class="q-mb-lg border border-gray-3 rounded-borders q-pa-xs">
          <img
            src="@/assets/illustrations/dashboard.svg"
            alt="product tour"
            style="max-width: 100%"
          />
        </div>

        <!-- ... -->

        <!-- quick access -->

        <div class="text-3 text-gray-6 q-mb-md">Quick access</div>

        <!-- ... -->
      </div>
    </template>
  </Layout>
</template>

<script>
const Layout = () => import("@/layouts/app/index");

export default {
  name: "DashboardPage",

  components: { Layout },
};
</script>

<style lang="scss" scoped></style>
