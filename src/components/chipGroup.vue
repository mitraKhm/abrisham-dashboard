<template>
  <div class="drop-down-mz">
    <div
      class="list-box align-center"
      :class="dropDown ? 'chip-group-visibility' : 'd-flex'"
    >
      <p
        v-if="chipTitle"
        class="list-section"
      >
        {{ chipTitle }}
      </p>
      <v-chip-group>
        <v-chip
          v-for="(item) in chipData"
          :key="item.id"
          :color="item.selected ? item.color : 'transparent'"
          class="chip-box"
          :text-color="item.selected ? 'white': '#9fa5c0'"
          @click="changeSelectedChip(item.id)"
        >
          {{ item.title }}
        </v-chip>
      </v-chip-group>
    </div>
    <div
      v-if="dropDown"
      class="drop-down-select-box mt-5 d-flex d-xl-none d-lg-none d-md-none d-sm-block d-xs-block"
    >
      <v-select
        v-model="selectedId"
        color="#3e5480"
        :items="chipData"
        item-text="title"
        item-value="id"
        class="col-sm-6"
        :menu-props="{ bottom: true, offsetY: true }"
        solo
        append-icon="mdi-chevron-down"
        dense
        background-color="#eff3ff"
        flat
        :label="chipTitle"
        @change="changeSelectedChip"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChipGroup',
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      },
    },
    chipTitle: {
      type: String,
      default: ''
    },
    dropDown: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      chipData: [],
      selectedId: 0
    }
  },
  watch: {
    value: {
      handler() {
        this.chipData = this.value
        this.setSelectedIdVariable()
      },
      immediate: true
    }
  },
  methods: {
    getSelectedItem() {
      return this.chipData.find(item => item.selected)
    },
    setSelectedIdVariable() {
      const selectedItem = this.getSelectedItem()
      if (!selectedItem) {
        this.selectedId = null
      } else {
        this.selectedId = selectedItem.id
      }
    },
    changeSelectedChip(selectedId) {
      // let that = this
      let chipData = []

      this.chipData.forEach((item) => {
        let itemObject = item
        let selected = item.id === selectedId
        itemObject.selected = selected
        chipData.push(itemObject)
      })

      this.chipData = chipData

      this.setSelectedIdVariable()

      this.$emit('input', this.chipData)

    }
  }
}
</script>

<style>

.v-select.v-input--dense .v-select__selection--comma {
  font-size: 14px;
  font-weight: 500;
  color: #3e5480;
}

.theme--light.v-label {
  color: #3e5480;
  font-size: 14px;
  font-weight: 500;
}

.v-select__slot .theme--light.v-select .v-select__selections {
  color: red;
}

.theme--light.v-icon {
  color: #3e5480;
}

.list-box {
  align-0: center;
}

.list-section {
  font-size: 16px;
  font-weight: bold;
  color: #3e5480
}

.chip-box {
  font-size: 16px;
  font-weight: 500;
  height: 42px;
  border-radius: 25px;
  line-height: 2.13;
  padding: 8px 20px 9px;
}

@media screen and (max-width: 960px) {
  .chip-group-visibility {
    display: none !important;
  }
}

@media screen and (max-width: 350px) {

}


</style>
