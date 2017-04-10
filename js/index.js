   $(function() {
       $('form').bootstrapValidator({　　　　　　　　　
           feedbackIcons: { valid: 'glyphicon glyphicon-ok', invalid: 'glyphicon glyphicon-remove', validating: 'glyphicon glyphicon-refresh' },
           fields: {
               name: {
                   validators: {
                       notEmpty: {
                           message: '请输入姓名'
                       },
                       regexp: {
                           regexp: /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/,
                           message: '用户名只能包含中英文、数字和·'
                       }
                   }
               },
               mobile: {
                   validators: {
                       notEmpty: {
                           message: '请输入手机号码'
                       },
                       regexp: {
                           regexp: /^(((13|14|15|18|17)\d{9}))$/,
                           message: '请输入正确格式的手机号码'
                       }
                   }
               },
               email: {
                   validators: {
                       notEmpty: {
                           message: '邮箱地址不能为空'
                       },
                       emailAddress: {
                           message: '请输入正确的邮箱地址'
                       }

                   }
               }
           }
       });

       $("#defaultForm").submit(function(ev) { ev.preventDefault(); });
       $("#submit").on("click", function() {
           var bootstrapValidator = $("#defaultForm").data('bootstrapValidator');
           bootstrapValidator.validate();
           if (bootstrapValidator.isValid()) {

               $("#defaultForm").submit();

               var d = {};
               var t = $('form').serializeArray();
               $.each(t, function() {
                   d[this.name] = this.value;
               });
               console.log(JSON.stringify(d));
               window.localStorage.setItem("name", this.name);

               $('.submitSuccess').css('display', 'block');
               setTimeout(function() { window.location = "http://m.souke.xdf.cn/"; }, 3000);

           } else return;
       });

   });