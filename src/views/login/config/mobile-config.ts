export const mobileRules={
          num:[
            { required:true,
              message:'请输入手机号',
              trigger:'blur'
            },
            {
              pattern:/^[a-z0-9]{11}$/,
              message:'账号必须是11位',
              trigger:'blur'
            }
            ],
            code:[
            {required:true,
            message:'请输入验证码',
            trigger:'blur'
            },
            {
              pattern:/^[a-z0-9]{6}$/,
              message:'密码必须是6位',
              trigger:'blur'
            }
            ]
          }
