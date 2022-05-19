import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../../../store/users/login-slice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().required('email est obligatoire').email(),
    password: yup.string().required('password est obligatoire'),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(userLogin(data));
    navigate('/');
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo]);

  return (
    <div className='px-5 py-5 p-lg-0 bg-surface-secondary'>
      <div className='d-flex justify-content-center'>
        <div className='col-lg-5 col-xl-4 p-12 p-xl-20 position-fixed start-0 top-0 h-screen overflow-y-hidden bg-red-600 d-none d-lg-flex flex-column'>
          {/* Logo */}
          <a className='d-block' href='#'>
            <img src='/images/logo.png' className='h-18' alt='...' />
          </a>
          {/* Title */}
          <div className='mt-32 mb-20'>
            <h1 className='ls-tight font-bolder display-6 text-white mb-5'>
              Let’s build something amazing today.
            </h1>
            <p className='text-white text-opacity-80'>
              Maybe some text here will help me see it better. Oh God. Oke,
              let’s do it then.
            </p>
          </div>
          {/* Circle */}
          <div className='w-56 h-56 bg-orange-500 rounded-circle position-absolute bottom-0 end-20 transform translate-y-1/3' />
        </div>
        <div className='col-12 col-md-9 col-lg-7 offset-lg-5 border-left-lg min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative'>
          <div className='row'>
            <div className='col-lg-10 col-md-9 col-xl-6 mx-auto ms-xl-0'>
              <div className='mt-10 mt-lg-5 mb-6 d-flex align-items-center d-lg-block'>
                <span className='d-inline-block d-lg-block h1 mb-lg-6 me-3'>
                  👋
                </span>
                <h1 className='ls-tight font-bolder h2'>Nice to see you!</h1>
              </div>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-5'>
                  <Form.Label htmlFor='email'>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='johndoe@gmail.com'
                    id='email'
                    {...register('email')}
                    className={errors.email?.message && 'is-invalid'}
                  />
                  <p className='invalid-feedback'>{errors.email?.message}</p>
                </div>
                <div className='mb-5'>
                  <Form.Label htmlFor='password'>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='*******'
                    id='password'
                    {...register('password')}
                    className={errors.password?.message && 'is-invalid'}
                  />
                  <p className='invalid-feedback'>{errors.password?.message}</p>
                </div>
                <div className='mb-5'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='check_example'
                      id='check_example'
                    />
                    <label className='form-check-label' htmlFor='check_example'>
                      Keep me logged in
                    </label>
                  </div>
                </div>
                <div>
                  <Button type='submit' className='w-full'>
                    Connecter
                  </Button>
                </div>
              </Form>
              <div className='py-5 text-center'>
                <span className='text-xs text-uppercase font-semibold'>or</span>
              </div>
              <div className='row'>
                <div className='col-sm-6'>
                  <a href='#' className='btn btn-neutral w-full'>
                    <span className='icon icon-sm pe-2'>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clipPath='url(#clip0)'>
                          <path
                            d='M12 -3.05176e-05C5.3833 -3.05176e-05 0 5.38327 0 12C0 17.7383 3.94971 22.7802 9.3916 23.9883C9.53906 24.021 9.69434 23.9848 9.81299 23.8901C9.93115 23.7949 10 23.6518 10 23.5V20.5C10 20.2236 9.77637 20 9.5 20H8.5C7.31494 20 6.25684 18.5381 5.40625 17.3637C5.32227 17.2475 5.23926 17.1333 5.15723 17.0215C5.50635 17.185 5.84717 17.3559 6.13037 17.498C6.95068 17.9091 7.72559 18.2978 8.35938 18.4795C8.38721 18.4887 8.42139 18.5053 8.45947 18.5224C8.70361 18.6323 9.15723 18.8364 9.56396 18.5717C10 18.2895 10 17.6953 10 17.5V17.1513C10 16.9277 9.85156 16.7314 9.63623 16.6704C6.86328 15.8847 5 13.8071 5 11.5C5 10.3003 5.49268 9.15475 6.42529 8.18796C6.56885 8.03903 6.60596 7.81784 6.51904 7.63034C6.14697 6.82809 6.22559 5.73679 6.66748 5.08151C7.25098 5.30905 8.00781 5.7861 8.49951 6.37009C8.63477 6.53024 8.85693 6.5903 9.05371 6.51755C10.9287 5.83005 13.0713 5.83005 14.9463 6.51755C15.145 6.59128 15.3662 6.53073 15.5005 6.37009C15.9922 5.7861 16.749 5.30905 17.3325 5.08151C17.7744 5.73679 17.853 6.82809 17.481 7.63034C17.394 7.81784 17.4312 8.03903 17.5747 8.18796C18.5073 9.15475 19 10.3003 19 11.5C19 13.9218 16.9302 16.0908 13.9668 16.7739C13.8154 16.8091 13.689 16.9121 13.6245 17.0532C13.5601 17.1943 13.5645 17.3574 13.6372 17.4946C13.8848 17.9633 14 18.6006 14 19.5V23.5C14 23.6518 14.0688 23.7949 14.187 23.8901C14.2769 23.9619 14.3872 24 14.5 24C14.5361 24 14.5723 23.9961 14.6084 23.9883C20.0503 22.7802 24 17.7382 24 12C24 5.38327 18.6167 -3.05176e-05 12 -3.05176e-05Z'
                            fill='#303C42'
                          />
                          <path
                            opacity='0.2'
                            d='M9.63623 16.9203C9.85156 16.9814 10 17.1777 10 17.4013V17.1513C10 16.9277 9.85156 16.7314 9.63623 16.6703C6.91486 15.8993 5.08038 13.8823 5.0127 11.6267C5.01154 11.6682 5 11.7083 5 11.7499C5 14.0571 6.86328 16.1347 9.63623 16.9203Z'
                            fill='white'
                          />
                          <path
                            opacity='0.2'
                            d='M13.9668 17.0239C16.9302 16.3408 19 14.1718 19 11.7499C19 11.7072 18.9882 11.6659 18.9869 11.6232C18.9171 13.9944 16.8791 16.1025 13.9668 16.7739C13.8154 16.809 13.689 16.912 13.6245 17.0532C13.5763 17.1587 13.5794 17.2739 13.6081 17.3841C13.6153 17.3572 13.6128 17.3289 13.6245 17.3032C13.689 17.162 13.8154 17.059 13.9668 17.0239Z'
                            fill='white'
                          />
                          <path
                            opacity='0.2'
                            d='M12 -6.10352e-05C5.3833 -6.10352e-05 0 5.38324 0 11.9999C0 12.0455 0.0053101 12.09 0.0057983 12.1354C0.0681763 5.57184 5.42194 0.249939 12 0.249939C18.5781 0.249939 23.9318 5.57184 23.9942 12.1354C23.9947 12.09 24 12.0455 24 11.9999C24 5.38324 18.6167 -6.10352e-05 12 -6.10352e-05Z'
                            fill='white'
                          />
                          <path
                            opacity='0.1'
                            d='M9.3916 23.9883C9.53906 24.021 9.69434 23.9848 9.81299 23.8901C9.93115 23.7949 10 23.6518 10 23.5V23.25C10 23.4018 9.93115 23.5449 9.81299 23.6401C9.69434 23.7348 9.53906 23.771 9.3916 23.7383C3.99286 22.5398 0.0678101 17.567 0.0057983 11.8854C0.0054321 11.924 0 11.9613 0 12C0 17.7383 3.94971 22.7802 9.3916 23.9883Z'
                            fill='#010101'
                          />
                          <path
                            opacity='0.1'
                            d='M14.6084 23.7383C14.5723 23.7461 14.5361 23.75 14.5 23.75C14.3872 23.75 14.2769 23.7119 14.187 23.6401C14.0688 23.5449 14 23.4018 14 23.25V23.5C14 23.6518 14.0688 23.7949 14.187 23.8901C14.2769 23.9619 14.3872 24 14.5 24C14.5361 24 14.5723 23.9961 14.6084 23.9883C20.0503 22.7802 24 17.7383 24 12C24 11.9613 23.9946 11.924 23.9942 11.8854C23.9322 17.567 20.0071 22.5398 14.6084 23.7383Z'
                            fill='#010101'
                          />
                          <path
                            opacity='0.1'
                            d='M17.3325 4.83441C16.749 5.06195 15.9922 5.539 15.5005 6.12299C15.3662 6.28363 15.145 6.34418 14.9463 6.27045C13.0713 5.58295 10.9287 5.58295 9.05371 6.27045C8.85694 6.3432 8.63477 6.28314 8.49952 6.12299C8.00782 5.539 7.25098 5.06195 6.66748 4.83441C6.41523 5.2085 6.29718 5.72455 6.29798 6.24799C6.33338 5.8139 6.45588 5.39819 6.66748 5.08441C7.25098 5.31195 8.00782 5.789 8.49952 6.37299C8.63477 6.53314 8.85694 6.5932 9.05371 6.52045C10.9287 5.83295 13.0713 5.83295 14.9463 6.52045C15.145 6.59418 15.3662 6.53363 15.5005 6.37299C15.9922 5.789 16.749 5.31195 17.3325 5.08441C17.5441 5.39819 17.6666 5.8139 17.702 6.24799C17.7028 5.72455 17.5848 5.2085 17.3325 4.83441Z'
                            fill='#010101'
                          />
                          <path
                            d='M12 -3.05176e-05C5.3833 -3.05176e-05 0 5.38327 0 12C0 17.7383 3.94971 22.7802 9.3916 23.9883C9.53906 24.021 9.69434 23.9848 9.81299 23.8901C9.93115 23.7949 10 23.6518 10 23.5V20.5C10 20.2236 9.77637 20 9.5 20H8.5C7.31494 20 6.25684 18.5381 5.40625 17.3637C5.32227 17.2475 5.23926 17.1333 5.15723 17.0215C5.50635 17.185 5.84717 17.3559 6.13037 17.498C6.95068 17.9091 7.72559 18.2978 8.35938 18.4795C8.38721 18.4887 8.42139 18.5053 8.45947 18.5224C8.70361 18.6323 9.15723 18.8364 9.56396 18.5717C10 18.2895 10 17.6953 10 17.5V17.1513C10 16.9277 9.85156 16.7314 9.63623 16.6704C6.86328 15.8847 5 13.8071 5 11.5C5 10.3003 5.49268 9.15475 6.42529 8.18796C6.56885 8.03903 6.60596 7.81784 6.51904 7.63034C6.14697 6.82809 6.22559 5.73679 6.66748 5.08151C7.25098 5.30905 8.00781 5.7861 8.49951 6.37009C8.63477 6.53024 8.85693 6.5903 9.05371 6.51755C10.9287 5.83005 13.0713 5.83005 14.9463 6.51755C15.145 6.59128 15.3662 6.53073 15.5005 6.37009C15.9922 5.7861 16.749 5.30905 17.3325 5.08151C17.7744 5.73679 17.853 6.82809 17.481 7.63034C17.394 7.81784 17.4312 8.03903 17.5747 8.18796C18.5073 9.15475 19 10.3003 19 11.5C19 13.9218 16.9302 16.0908 13.9668 16.7739C13.8154 16.8091 13.689 16.9121 13.6245 17.0532C13.5601 17.1943 13.5645 17.3574 13.6372 17.4946C13.8848 17.9633 14 18.6006 14 19.5V23.5C14 23.6518 14.0688 23.7949 14.187 23.8901C14.2769 23.9619 14.3872 24 14.5 24C14.5361 24 14.5723 23.9961 14.6084 23.9883C20.0503 22.7802 24 17.7382 24 12C24 5.38327 18.6167 -3.05176e-05 12 -3.05176e-05Z'
                            fill='url(#paint0_linear)'
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id='paint0_linear'
                            x1='1.07434'
                            y1='7.03731'
                            x2='22.8646'
                            y2='17.1983'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='white' stopOpacity='0.2' />
                            <stop
                              offset={1}
                              stopColor='white'
                              stopOpacity={0}
                            />
                          </linearGradient>
                          <clipPath id='clip0'>
                            <rect width={24} height={24} fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Github
                  </a>
                </div>
                <div className='col-sm-6'>
                  <a href='#' className='btn btn-neutral w-full'>
                    <span className='icon icon-sm pe-2'>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M12 5C13.6168 5 15.1013 5.55353 16.2863 6.47406L19.9235 3.00409C17.8088 1.13995 15.0406 0 12 0C7.3924 0 3.39667 2.59991 1.3858 6.40985L5.43024 9.60278C6.40997 6.91937 8.97748 5 12 5Z'
                          fill='#F44336'
                        />
                        <path
                          d='M23.8961 13.5018C23.9586 13.0102 24 12.5087 24 12C24 11.1422 23.9063 10.3068 23.7352 9.5H12V14.5H18.4862C17.9615 15.8638 17.0272 17.0178 15.838 17.8195L19.8975 21.0243C22.0494 19.1354 23.522 16.4904 23.8961 13.5018Z'
                          fill='#2196F3'
                        />
                        <path
                          d='M5 12C5 11.1566 5.15686 10.3516 5.43024 9.60278L1.3858 6.40985C0.504333 8.08002 0 9.98016 0 12C0 13.9973 0.495056 15.8763 1.35822 17.533L5.40778 14.3359C5.14844 13.6044 5 12.8204 5 12Z'
                          fill='#FFC107'
                        />
                        <path
                          d='M12 19C8.95447 19 6.37042 17.0515 5.40778 14.3359L1.35822 17.533C3.35925 21.3735 7.36981 24 12 24C15.0278 24 17.7888 22.8752 19.8975 21.0243L15.838 17.8195C14.7412 18.5589 13.4284 19 12 19Z'
                          fill='#00B060'
                        />
                        <path
                          opacity='0.1'
                          d='M12 23.75C8.46832 23.75 5.29272 22.2928 3.04755 19.9713C5.24536 22.4378 8.43646 24 12 24C15.5306 24 18.6953 22.4686 20.8881 20.0408C18.6496 22.3246 15.4981 23.75 12 23.75Z'
                          fill='black'
                        />
                        <path
                          opacity='0.1'
                          d='M12 14.25V14.5H18.4862L18.5875 14.25H12Z'
                          fill='black'
                        />
                        <path
                          d='M23.9944 12.147C23.9952 12.0978 24 12.0494 24 12C24 11.986 23.9978 11.9725 23.9977 11.9586C23.9971 12.0215 23.9939 12.0838 23.9944 12.147Z'
                          fill='#E6E6E6'
                        />
                        <path
                          opacity='0.2'
                          d='M12 9.5V9.75H23.7856C23.7698 9.66748 23.7526 9.58191 23.7352 9.5H12Z'
                          fill='white'
                        />
                        <path
                          d='M23.7352 9.5H12V14.5H18.4862C17.4775 17.1216 14.9772 19 12 19C8.13403 19 5 15.866 5 12C5 8.13397 8.13403 5 12 5C13.4019 5 14.6939 5.43066 15.7885 6.14069C15.9561 6.24957 16.1289 6.35181 16.2863 6.47406L19.9235 3.00409L19.8414 2.94098C17.7369 1.11707 15.0035 0 12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 24 12 24C18.1177 24 23.1555 19.4188 23.8961 13.5018C23.9586 13.0102 24 12.5087 24 12C24 11.1422 23.9063 10.3068 23.7352 9.5Z'
                          fill='url(#paint0_linear)'
                        />
                        <path
                          opacity='0.1'
                          d='M15.7885 5.89069C14.6939 5.18066 13.4019 4.75 12 4.75C8.13403 4.75 5 7.88397 5 11.75C5 11.7922 5.00057 11.8251 5.0013 11.8672C5.06874 8.05951 8.17621 5 12 5C13.4019 5 14.6939 5.43066 15.7885 6.14069C15.9561 6.24957 16.1289 6.35181 16.2863 6.47406L19.9235 3.00409L16.2863 6.22406C16.1289 6.10181 15.9561 5.99957 15.7885 5.89069Z'
                          fill='black'
                        />
                        <path
                          opacity='0.2'
                          d='M12 0.25C14.975 0.25 17.6829 1.34839 19.7793 3.1416L19.9235 3.00409L19.8134 2.90827C17.709 1.08436 15.0035 0 12 0C5.37256 0 0 5.37256 0 12C0 12.0422 0.0058594 12.0829 0.0062866 12.125C0.0740356 5.55585 5.41473 0.25 12 0.25Z'
                          fill='white'
                        />
                        <defs>
                          <linearGradient
                            id='paint0_linear'
                            x1={0}
                            y1={12}
                            x2={24}
                            y2={12}
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='white' stopOpacity='0.2' />
                            <stop
                              offset={1}
                              stopColor='white'
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    Google
                  </a>
                </div>
              </div>
              <div className='my-6'>
                <small>Vous n'avez pas de compte</small>
                <Link
                  to='/register'
                  className='text-warning text-sm font-semibold ms-3'
                >
                  Inscrire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
