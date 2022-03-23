import { useEffect } from 'react'
import { Button, Col, Form, Input, Row } from 'antd'
import { useLoginMutation } from '../../app/services/authApi'
import { setCredentials } from '../../app/slices/authSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  setRefreshTokenToCookies,
  setTokenToCookies,
} from '../../utils/cookiesFunction'
import { useLocation, useNavigate } from 'react-router-dom'

interface payloadLogin {
  email: string
  password: string
}

function LoginPage() {
  useEffect(() => {
    document.title = 'Đăng nhập'
    window.scrollTo(0, 0)
  }, [])

  const { access_token } = useAppSelector(state => state.auth)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const dispatch = useAppDispatch()
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({
      email: 'nguyenduyet@gmail.com',
      password: 'nguyenduyet@gmail.com@*#',
    })
  }, [])
  const [login] = useLoginMutation()
  const onFinish = async (values: payloadLogin) => {
    try {
      const result: any = await login({ payloadLogin: values })
      if (result.data) {
        const payload = {
          access_token: result.data.access_token,
          user: result.data.user,
        }

        dispatch(setCredentials(payload))
        setTokenToCookies(
          result.data.access_token,
          result.data.expires_in - 300,
        )
        setRefreshTokenToCookies(
          result.data.access_token,
          result.data.expires_in,
        )
        /**
         * nnduyet comment
         * you should set refresh_token to cookie
         */
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (access_token) {
      if (from) {
        navigate(from, { replace: true })
      } else {
        navigate('/')
      }
    }
  }, [access_token, from])

  return (
    <section id='login-page'>
      <Row justify='center'>
        <Col span={6}>
          <Form name='basic' layout='vertical' onFinish={onFinish} form={form}>
            <Form.Item
              label='email'
              name='email'
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Password'
              name='password'
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='primary' htmlType='submit'>
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </section>
  )
}
export default LoginPage
