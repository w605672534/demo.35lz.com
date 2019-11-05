define({
  widget: 'xform',
  option: {
    series: [
      {
        name: 'current_month',
        control: 'month',
        size:'large',
        placeholder: '请选择月份',
        labelKey: 'current_month',
        valueKey: 'current_month',
        valueIndex: 0,
        change: function (value) {
          if (value) {
            console.log(this.$route.params.name, value)
            this.$store.commit('setParams', { name: this.$route.params.name, key: 'current_month', value: value });
          }
        }
      }
    ]
  }
});

