<template>
  <div>
    <SpeedDial
        :model="helpItems"
        direction="up"
        showIcon="pi pi-question"
        style="position: fixed; bottom: 2rem; right: 2rem;"
    />
    <Card v-if="!hideSupportCard" class="clickup-embed-card">
      <template #content>
        <iframe
            class="clickup-embed clickup-dynamic-height"
            :src="supportFormUrl"
            onwheel=""
            width="100%"
            height="850px"
            style="background: transparent; border: 1px solid #ccc;"
        ></iframe>
      </template>
      <template #footer>
        <div class="flex justify-content-end">
          <Button
              label="Close"
              icon="pi pi-times"
              @click="hideSupportCard = true"
              class="p-button-secondary"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import {Button, Card, SpeedDial} from "primevue";
export default {
  name: 'SupportWidget',
  components: {
    Button,
    Card,
    SpeedDial
  },
  props: {
    supportFormUrl: {
      type: String
    },
    documentationUrl: {
      type: String
    }
  },
  data() {
    return {
      hideSupportCard: true
    }
  },
  computed: {
    helpItems() {
      return [
        {
          label: 'Documentation',
          icon: 'pi pi-book',
          tooltipOptions: {
            key: 'Docs',
            position: 'left'
          },
          command: () => {
            window.open(this.documentationUrl, '_blank');
          }
        },
        {
          label: 'Support Desk',
          icon: 'pi pi-question',
          command: () => {
            this.hideSupportCard = false;
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.clickup-embed-card {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2000;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  width: 40vw !important;
  height: 75vh !important;
  box-shadow: 0 4px 32px rgba(0,0,0,0.25);
  border-radius: 8px;
}
</style>

<style>
.p-card .p-card-footer {
  gap: 0 !important;
  padding-top: 0 !important;
}

.p-speeddial-action {
  text-decoration: none;
}

.p-speeddial-button.p-button.p-button-icon-only {
    width: 3rem;
    height: 3rem;
}
</style>
