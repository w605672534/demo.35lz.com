<script>
export default {
  name: 'dataset',
  props: ['name', 'url', 'params', 'viewParams', 'type', 'pageName', 'loop'],
  data () {
    return {
      timer: null
    }
  },
  computed: {
    queryParams(){
      var params = {}
      this.params && this.params.forEach(function(item){
        var name = item.key ? item.key : item.name;
        if(this.$store.state.params[this.pageName] && this.$store.state.params[this.pageName][name] !== undefined){
          params[item.name] = this.$store.state.params[this.pageName][name]
        }else if(this.$route.query[name]) {
          params[item.name] = this.$route.query[name]
        }else if(this.viewParams && this.viewParams[name]){
          params[item.name] = this.viewParams[name]
        }else if(item.value){
          params[item.name] = item.value
        }
      }, this)
      return params
    }
  },
  created() {
    let _this = this;
    this.params && this.params.forEach(function(item){
      var name = item.key ? item.key : item.name;
      if(this.queryParams[name] !== undefined){
        this.$watch('queryParams.' + name, function(newVal, oldVal){
          this.load()
        })
      }
    }, this)
    this.load()
    if(this.loop){
      this.timer = setInterval(function(){
        _this.load()
      }, this.loop * 1000)
    }
  },
  methods: {
  	load: function () {
  		this.$emit('load');
  		this.$http.get(this.url, {params: this.queryParams})
      .then(function(response){
        this.$emit('loaded', this.name, response.body)
      },function(response){
        if (response.data && response.data.code === 401) {
          clearInterval(this.timer)
          this.$store.state.user = '';
          this.$store.state.resources = '';
          this.$router.push('/signin')
        } else {
          this.$emit('failed')
        }
      })
  	}
  },
  render () {

  }
}
</script>
