<template>
  <div class="modal fade bs-example-modal-lg modal-user container" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document" style="width: 537px">
      <div class="modal-box modal-content">
        <div class="modal-box-panel panel panel-default">
          <div class="modal-box-heading panel-heading">个人中心</div>
          <div class="modal-box-body panel-body">
            <div class="personal-center-modal">
              <ul class="personal nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#home1" aria-controls="home1" role="tab" data-toggle="tab">个人资料</a></li>
                <li role="presentation"><a href="#profile1" aria-controls="profile1" role="tab" data-toggle="tab">公司资料</a></li>
                <li role="presentation"><a href="#messages1" aria-controls="messages1" role="tab" data-toggle="tab">资料编辑</a></li>
                <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">设置</a></li>
              </ul>

              <!-- Tab panes -->
              <div class="personal-center-modal-tab tab-content">
                <div role="tabpanel" class="tab-pane active" id="home1">
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label personal-center-modal-tab-name">我的ID</label>
                      <div class="personal-center-modal-tab-content col-sm-10">
                        <p class="form-control-static">423423432</p>
                      </div>
                    </div>
                  </form>
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label personal-center-modal-tab-name">我的名称</label>
                      <div class="personal-center-modal-tab-content col-sm-10">
                        <p class="form-control-static">路飞</p>
                      </div>
                    </div>
                  </form>
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label personal-center-modal-tab-name">我的头像</label>
                      <div class="personal-center-modal-tab-content col-sm-10">
                        <p class="form-control-static"><img src="/static/images/face-cover1.png" alt="..." class="img-rounded"></p>
                      </div>
                    </div>
                  </form>
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label personal-center-modal-tab-name">我的简介</label>
                      <div class="personal-center-modal-tab-content col-sm-10">
                        <p class="form-control-static">这里是简介内容这里是简介内容这里是简介内容这里是简介内容这里是简介内容这里是简介内容这里是简介内容</p>
                      </div>
                    </div>
                  </form>
                </div>
                <div role="tabpanel" class="tab-pane" id="profile1">
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label personal-center-modal-tab-name">公司logo</label>
                      <div class="personal-center-modal-tab-content col-sm-10">
                        <p class="form-control-static"><img src="/static/images/logo.png" alt="..." class="img-rounded"></p>
                      </div>
                    </div>
                  </form>
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label personal-center-modal-tab-name">公司名称</label>
                      <div class="personal-center-modal-tab-content col-sm-10">
                        <p class="form-control-static">大庆油田天然气分公司</p>
                      </div>
                    </div>
                  </form>

                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label personal-center-modal-tab-name">公司简介</label>
                      <div class="personal-center-modal-tab-content col-sm-10">
                        <p class="form-control-static">这里是简介内容这里是简介内容这里是简介内容这里是简介内容这里是简介内容这里是简介内容这里是简介内容</p>
                      </div>
                    </div>
                  </form>
                </div>
                <div role="tabpanel" class="tab-pane">
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label personal-center-modal-tab-name">我的ID</label>
                      <div class="personal-center-modal-tab-content personal-center-modal-tab-bj col-sm-10">
                        <p class="form-control-static">
                        <div class="input-group">
                          <input type="text" class="personal-center-modal-tab-input form-control" placeholder="423423432" aria-describedby="basic-addon1">
                        </div>
                        </p>
                      </div>
                    </div>
                  </form>
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label personal-center-modal-tab-name">我的名称</label>
                      <div class="personal-center-modal-tab-content personal-center-modal-tab-bj col-sm-10">
                        <p class="form-control-static">
                        <div class="input-group">
                          <input type="text" class="personal-center-modal-tab-input form-control" placeholder="路飞" aria-describedby="basic-addon1">
                        </div>
                        </p>
                      </div>
                    </div>
                  </form>
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label personal-center-modal-tab-name">我的头像</label>
                      <div class="personal-center-modal-tab-content col-sm-10">
                        <p class="form-control-static"><img src="/static/images/face-cover.png" alt="..." class="img-rounded"></p>
                      </div>
                    </div>
                  </form>
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label personal-center-modal-tab-name">我的简介</label>
                      <div class="personal-center-modal-tab-content col-sm-10">
                        <p class="form-control-static"><textarea class="form-control personal-center-modal-tab-input" rows="3" style="color: #8391a5">这里是简介内容这里是简介内容这里是简介内容这里是简介内容这里是简介内容这里是简介内容这里是简介内容</textarea></p>
                      </div>
                    </div>
                  </form>
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label personal-center-modal-tab-name">公司logo</label>
                      <div class="personal-center-modal-tab-content col-sm-10">
                        <p class="form-control-static"><img src="/static/images/logo-cover.png" alt="..." class="img-rounded"></p>
                      </div>
                    </div>
                  </form>
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label personal-center-modal-tab-name">公司名称</label>
                      <div class="personal-center-modal-tab-content personal-center-modal-tab-bj col-sm-10">
                        <p class="form-control-static">
                        <div class="input-group">
                          <input type="text" class="personal-center-modal-tab-input form-control" placeholder="西云图信息技术有限公司" aria-describedby="basic-addon1">
                        </div>
                        </p>
                      </div>
                    </div>
                  </form>
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label personal-center-modal-tab-name">公司简介</label>
                      <div class="personal-center-modal-tab-content col-sm-10">
                        <p class="form-control-static"><textarea class="form-control personal-center-modal-tab-input" rows="3" style="color: #8391a5">这里是简介内容这里是简介内容这里是简介内容这里是简介内容这里是简介内容这里是简介内容这里是简介内容</textarea></p>
                      </div>
                    </div>
                  </form>

                  <div class="modal-footer" style="border: 0;padding-left: 102px;text-align: left">
                  <button type="button" class="modal-footer-btn btn btn-primary">保存</button>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="settings">
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label personal-center-modal-tab-name">语言设置</label>
                      <div class="personal-center-modal-tab-content col-sm-10">
                        <p class="form-control-static" style="margin-top: -9px ">
                          <label class="radio-inline" >
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked> 中文
                          </label>
                          <label class="radio-inline">
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">English
                          </label>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  }
}
</script>

<style scoped>

</style>
