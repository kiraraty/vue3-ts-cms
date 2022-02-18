export const accountRules={
          username:[
            { required:true,
              message:'请输入账号',
              trigger:'blur'
            },
            {
              pattern:/^[a-z0-9]{5,10}$/,
              message:'账号必须是5到10位',
              trigger:'blur'
            }
            ],
          password:[
            {required:true,
            message:'请输入密码',
            trigger:'blur'
            },
            {
              pattern:/^[a-z0-9]{5,12}$/,
              message:'密码必须是5位以上',
              trigger:'blur'
            }
            ]
          }

