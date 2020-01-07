import React from 'react';

export default function TeamPage() {
  return (
    // container
    <div className=" mx-auto px-24 text-center">
      <h2 className="text-4xl flex justify-center font-sembold text-black-600 p-12" id="team">
        Team
      </h2>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 px-2 mb-6">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="grid container hovereffect hover-photo">
              
              <img
                className="rounded-r-lg rounded-tl-lg ease img-size mx-auto"
                src="https://i.ibb.co/cNtktWF/profile.jpg"
                alt="Jonathan"
                border="0"
              ></img>
              <div class="middle flex">
                <a href="https://github.com/macjabeth">
                  <svg
                    className="mr-8"
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0988 5.24463C16.6425 5.23838 4.12378 17.7509 4.12378 33.1946C4.12378 45.4071 11.955 55.7884 22.8613 59.6009C24.33 59.9696 24.105 58.9259 24.105 58.2134V53.3696C15.6238 54.3634 15.28 48.7509 14.7113 47.8134C13.5613 45.8509 10.8425 45.3509 11.655 44.4134C13.5863 43.4196 15.555 44.6634 17.8363 48.0321C19.4863 50.4759 22.705 50.0634 24.3363 49.6571C24.6925 48.1884 25.455 46.8759 26.505 45.8571C17.7175 44.2821 14.055 38.9196 14.055 32.5446C14.055 29.4509 15.0738 26.6071 17.0738 24.3134C15.7988 20.5321 17.1925 17.2946 17.38 16.8134C21.0113 16.4884 24.7863 19.4134 25.08 19.6446C27.1425 19.0884 29.4988 18.7946 32.1363 18.7946C34.7863 18.7946 37.1488 19.1009 39.23 19.6634C39.9363 19.1259 43.4363 16.6134 46.8113 16.9196C46.9925 17.4009 48.355 20.5634 47.155 24.2946C49.18 26.5946 50.2113 29.4634 50.2113 32.5634C50.2113 38.9509 46.5238 44.3196 37.7113 45.8696C38.4661 46.6119 39.0654 47.4972 39.4743 48.4737C39.8831 49.4503 40.0933 50.4985 40.0925 51.5571V58.5884C40.1425 59.1509 40.0925 59.7071 41.03 59.7071C52.0988 55.9759 60.0675 45.5196 60.0675 33.2009C60.0675 17.7509 47.5425 5.24463 32.0988 5.24463Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/macjabeth/">
                  <svg
                    width="64"
                    height="65"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52.9813 7.47791H11.0188C8.80006 7.47791 7.00006 9.27791 7.00006 11.4967V53.4592C7.00006 55.6779 8.80006 57.4779 11.0188 57.4779H52.9813C55.2001 57.4779 57.0001 55.6779 57.0001 53.4592V11.4967C57.0001 9.27791 55.2001 7.47791 52.9813 7.47791ZM52.9813 53.4779C24.9938 53.4717 11.0001 53.4654 11.0001 53.4592C11.0063 25.4717 11.0126 11.4779 11.0188 11.4779C39.0063 11.4842 53.0001 11.4904 53.0001 11.4967C52.9938 39.4842 52.9876 53.4779 52.9813 53.4779ZM14.4126 26.2217H21.8313V50.0842H14.4126V26.2217ZM18.1251 22.9592C20.4938 22.9592 22.4251 21.0342 22.4251 18.6592C22.4251 18.0945 22.3138 17.5353 22.0977 17.0136C21.8817 16.4919 21.5649 16.0179 21.1656 15.6186C20.7663 15.2193 20.2923 14.9026 19.7706 14.6865C19.2489 14.4704 18.6897 14.3592 18.1251 14.3592C17.5604 14.3592 17.0012 14.4704 16.4795 14.6865C15.9578 14.9026 15.4838 15.2193 15.0845 15.6186C14.6852 16.0179 14.3685 16.4919 14.1524 17.0136C13.9363 17.5353 13.8251 18.0945 13.8251 18.6592C13.8188 21.0342 15.7438 22.9592 18.1251 22.9592ZM33.8938 38.2779C33.8938 35.1654 34.4876 32.1529 38.3438 32.1529C42.1438 32.1529 42.2001 35.7092 42.2001 38.4779V50.0842H49.6126V36.9967C49.6126 30.5717 48.2251 25.6279 40.7188 25.6279C37.1126 25.6279 34.6938 27.6092 33.7001 29.4842H33.6001V26.2217H26.4813V50.0842H33.8938V38.2779Z"
                      fill="#2B6CB0"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <h4 className="text-3xl text-gray-800 font-bold mb-3">Jonathan Picazo</h4>
            <p className="text-gray-500 mb-8">Team Leader/Software Engineer</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-6">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="grid container hovereffect hover-photo">
              <img
                className="rounded-r-lg rounded-tl-lg img-size mx-auto"
                src="https://i.ibb.co/yqZpTgq/T4-JUEB3-ME-UJ11-F1-S13-799843608d4e-512.png"
                alt="Bobby"
                border="0"
              ></img>
              <div class="middle flex">
                <a href="https://github.com/bobbyhalljr">
                  <svg
                    className="mr-8"
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0988 5.24463C16.6425 5.23838 4.12378 17.7509 4.12378 33.1946C4.12378 45.4071 11.955 55.7884 22.8613 59.6009C24.33 59.9696 24.105 58.9259 24.105 58.2134V53.3696C15.6238 54.3634 15.28 48.7509 14.7113 47.8134C13.5613 45.8509 10.8425 45.3509 11.655 44.4134C13.5863 43.4196 15.555 44.6634 17.8363 48.0321C19.4863 50.4759 22.705 50.0634 24.3363 49.6571C24.6925 48.1884 25.455 46.8759 26.505 45.8571C17.7175 44.2821 14.055 38.9196 14.055 32.5446C14.055 29.4509 15.0738 26.6071 17.0738 24.3134C15.7988 20.5321 17.1925 17.2946 17.38 16.8134C21.0113 16.4884 24.7863 19.4134 25.08 19.6446C27.1425 19.0884 29.4988 18.7946 32.1363 18.7946C34.7863 18.7946 37.1488 19.1009 39.23 19.6634C39.9363 19.1259 43.4363 16.6134 46.8113 16.9196C46.9925 17.4009 48.355 20.5634 47.155 24.2946C49.18 26.5946 50.2113 29.4634 50.2113 32.5634C50.2113 38.9509 46.5238 44.3196 37.7113 45.8696C38.4661 46.6119 39.0654 47.4972 39.4743 48.4737C39.8831 49.4503 40.0933 50.4985 40.0925 51.5571V58.5884C40.1425 59.1509 40.0925 59.7071 41.03 59.7071C52.0988 55.9759 60.0675 45.5196 60.0675 33.2009C60.0675 17.7509 47.5425 5.24463 32.0988 5.24463Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/bobby-hall-jr-339091143/">
                  <svg
                    width="64"
                    height="65"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52.9813 7.47791H11.0188C8.80006 7.47791 7.00006 9.27791 7.00006 11.4967V53.4592C7.00006 55.6779 8.80006 57.4779 11.0188 57.4779H52.9813C55.2001 57.4779 57.0001 55.6779 57.0001 53.4592V11.4967C57.0001 9.27791 55.2001 7.47791 52.9813 7.47791ZM52.9813 53.4779C24.9938 53.4717 11.0001 53.4654 11.0001 53.4592C11.0063 25.4717 11.0126 11.4779 11.0188 11.4779C39.0063 11.4842 53.0001 11.4904 53.0001 11.4967C52.9938 39.4842 52.9876 53.4779 52.9813 53.4779ZM14.4126 26.2217H21.8313V50.0842H14.4126V26.2217ZM18.1251 22.9592C20.4938 22.9592 22.4251 21.0342 22.4251 18.6592C22.4251 18.0945 22.3138 17.5353 22.0977 17.0136C21.8817 16.4919 21.5649 16.0179 21.1656 15.6186C20.7663 15.2193 20.2923 14.9026 19.7706 14.6865C19.2489 14.4704 18.6897 14.3592 18.1251 14.3592C17.5604 14.3592 17.0012 14.4704 16.4795 14.6865C15.9578 14.9026 15.4838 15.2193 15.0845 15.6186C14.6852 16.0179 14.3685 16.4919 14.1524 17.0136C13.9363 17.5353 13.8251 18.0945 13.8251 18.6592C13.8188 21.0342 15.7438 22.9592 18.1251 22.9592ZM33.8938 38.2779C33.8938 35.1654 34.4876 32.1529 38.3438 32.1529C42.1438 32.1529 42.2001 35.7092 42.2001 38.4779V50.0842H49.6126V36.9967C49.6126 30.5717 48.2251 25.6279 40.7188 25.6279C37.1126 25.6279 34.6938 27.6092 33.7001 29.4842H33.6001V26.2217H26.4813V50.0842H33.8938V38.2779Z"
                      fill="#2B6CB0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Bobby Hall</h4>
            <p className="text-gray-500 mb-8">Software Engineer</p>
            {/* </div> */}
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="grid container hovereffect hover-photo">
              <img
                className="rounded-r-lg rounded-tl-lg img-size  mx-auto"
                src="https://i.ibb.co/WfqQd49/T4-JUEB3-ME-UL03-FJADB-b54ed5bc71f5-512.png"
                alt="Tyler"
              ></img>
              <div class="middle flex">
                <a href="https://github.com/Bangstry">
                  <svg
                    className="mr-8"
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0988 5.24463C16.6425 5.23838 4.12378 17.7509 4.12378 33.1946C4.12378 45.4071 11.955 55.7884 22.8613 59.6009C24.33 59.9696 24.105 58.9259 24.105 58.2134V53.3696C15.6238 54.3634 15.28 48.7509 14.7113 47.8134C13.5613 45.8509 10.8425 45.3509 11.655 44.4134C13.5863 43.4196 15.555 44.6634 17.8363 48.0321C19.4863 50.4759 22.705 50.0634 24.3363 49.6571C24.6925 48.1884 25.455 46.8759 26.505 45.8571C17.7175 44.2821 14.055 38.9196 14.055 32.5446C14.055 29.4509 15.0738 26.6071 17.0738 24.3134C15.7988 20.5321 17.1925 17.2946 17.38 16.8134C21.0113 16.4884 24.7863 19.4134 25.08 19.6446C27.1425 19.0884 29.4988 18.7946 32.1363 18.7946C34.7863 18.7946 37.1488 19.1009 39.23 19.6634C39.9363 19.1259 43.4363 16.6134 46.8113 16.9196C46.9925 17.4009 48.355 20.5634 47.155 24.2946C49.18 26.5946 50.2113 29.4634 50.2113 32.5634C50.2113 38.9509 46.5238 44.3196 37.7113 45.8696C38.4661 46.6119 39.0654 47.4972 39.4743 48.4737C39.8831 49.4503 40.0933 50.4985 40.0925 51.5571V58.5884C40.1425 59.1509 40.0925 59.7071 41.03 59.7071C52.0988 55.9759 60.0675 45.5196 60.0675 33.2009C60.0675 17.7509 47.5425 5.24463 32.0988 5.24463Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/tyler-quinn-b78a41195/">
                  <svg
                    width="64"
                    height="65"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52.9813 7.47791H11.0188C8.80006 7.47791 7.00006 9.27791 7.00006 11.4967V53.4592C7.00006 55.6779 8.80006 57.4779 11.0188 57.4779H52.9813C55.2001 57.4779 57.0001 55.6779 57.0001 53.4592V11.4967C57.0001 9.27791 55.2001 7.47791 52.9813 7.47791ZM52.9813 53.4779C24.9938 53.4717 11.0001 53.4654 11.0001 53.4592C11.0063 25.4717 11.0126 11.4779 11.0188 11.4779C39.0063 11.4842 53.0001 11.4904 53.0001 11.4967C52.9938 39.4842 52.9876 53.4779 52.9813 53.4779ZM14.4126 26.2217H21.8313V50.0842H14.4126V26.2217ZM18.1251 22.9592C20.4938 22.9592 22.4251 21.0342 22.4251 18.6592C22.4251 18.0945 22.3138 17.5353 22.0977 17.0136C21.8817 16.4919 21.5649 16.0179 21.1656 15.6186C20.7663 15.2193 20.2923 14.9026 19.7706 14.6865C19.2489 14.4704 18.6897 14.3592 18.1251 14.3592C17.5604 14.3592 17.0012 14.4704 16.4795 14.6865C15.9578 14.9026 15.4838 15.2193 15.0845 15.6186C14.6852 16.0179 14.3685 16.4919 14.1524 17.0136C13.9363 17.5353 13.8251 18.0945 13.8251 18.6592C13.8188 21.0342 15.7438 22.9592 18.1251 22.9592ZM33.8938 38.2779C33.8938 35.1654 34.4876 32.1529 38.3438 32.1529C42.1438 32.1529 42.2001 35.7092 42.2001 38.4779V50.0842H49.6126V36.9967C49.6126 30.5717 48.2251 25.6279 40.7188 25.6279C37.1126 25.6279 34.6938 27.6092 33.7001 29.4842H33.6001V26.2217H26.4813V50.0842H33.8938V38.2779Z"
                      fill="#2B6CB0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Tyler Quinn</h4>
            <p className="text-gray-500 mb-8">Software Engineer</p>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-2 mb-4">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="grid container hovereffect hover-photo">
              <img
                className="rounded-r-lg rounded-tl-lg img-size mx-auto"
                src="https://i.ibb.co/f0tsXRk/T4-JUEB3-ME-UJG8-RLWKG-3766d295008c-512.png"
                alt="Zachary"
                border="0"
              ></img>
              <div class="middle flex">
                <a href="https://github.com/zpallday">
                  <svg
                    className="mr-8"
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0988 5.24463C16.6425 5.23838 4.12378 17.7509 4.12378 33.1946C4.12378 45.4071 11.955 55.7884 22.8613 59.6009C24.33 59.9696 24.105 58.9259 24.105 58.2134V53.3696C15.6238 54.3634 15.28 48.7509 14.7113 47.8134C13.5613 45.8509 10.8425 45.3509 11.655 44.4134C13.5863 43.4196 15.555 44.6634 17.8363 48.0321C19.4863 50.4759 22.705 50.0634 24.3363 49.6571C24.6925 48.1884 25.455 46.8759 26.505 45.8571C17.7175 44.2821 14.055 38.9196 14.055 32.5446C14.055 29.4509 15.0738 26.6071 17.0738 24.3134C15.7988 20.5321 17.1925 17.2946 17.38 16.8134C21.0113 16.4884 24.7863 19.4134 25.08 19.6446C27.1425 19.0884 29.4988 18.7946 32.1363 18.7946C34.7863 18.7946 37.1488 19.1009 39.23 19.6634C39.9363 19.1259 43.4363 16.6134 46.8113 16.9196C46.9925 17.4009 48.355 20.5634 47.155 24.2946C49.18 26.5946 50.2113 29.4634 50.2113 32.5634C50.2113 38.9509 46.5238 44.3196 37.7113 45.8696C38.4661 46.6119 39.0654 47.4972 39.4743 48.4737C39.8831 49.4503 40.0933 50.4985 40.0925 51.5571V58.5884C40.1425 59.1509 40.0925 59.7071 41.03 59.7071C52.0988 55.9759 60.0675 45.5196 60.0675 33.2009C60.0675 17.7509 47.5425 5.24463 32.0988 5.24463Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/zachary-peasley-b8b057194/">
                  <svg
                    width="64"
                    height="65"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52.9813 7.47791H11.0188C8.80006 7.47791 7.00006 9.27791 7.00006 11.4967V53.4592C7.00006 55.6779 8.80006 57.4779 11.0188 57.4779H52.9813C55.2001 57.4779 57.0001 55.6779 57.0001 53.4592V11.4967C57.0001 9.27791 55.2001 7.47791 52.9813 7.47791ZM52.9813 53.4779C24.9938 53.4717 11.0001 53.4654 11.0001 53.4592C11.0063 25.4717 11.0126 11.4779 11.0188 11.4779C39.0063 11.4842 53.0001 11.4904 53.0001 11.4967C52.9938 39.4842 52.9876 53.4779 52.9813 53.4779ZM14.4126 26.2217H21.8313V50.0842H14.4126V26.2217ZM18.1251 22.9592C20.4938 22.9592 22.4251 21.0342 22.4251 18.6592C22.4251 18.0945 22.3138 17.5353 22.0977 17.0136C21.8817 16.4919 21.5649 16.0179 21.1656 15.6186C20.7663 15.2193 20.2923 14.9026 19.7706 14.6865C19.2489 14.4704 18.6897 14.3592 18.1251 14.3592C17.5604 14.3592 17.0012 14.4704 16.4795 14.6865C15.9578 14.9026 15.4838 15.2193 15.0845 15.6186C14.6852 16.0179 14.3685 16.4919 14.1524 17.0136C13.9363 17.5353 13.8251 18.0945 13.8251 18.6592C13.8188 21.0342 15.7438 22.9592 18.1251 22.9592ZM33.8938 38.2779C33.8938 35.1654 34.4876 32.1529 38.3438 32.1529C42.1438 32.1529 42.2001 35.7092 42.2001 38.4779V50.0842H49.6126V36.9967C49.6126 30.5717 48.2251 25.6279 40.7188 25.6279C37.1126 25.6279 34.6938 27.6092 33.7001 29.4842H33.6001V26.2217H26.4813V50.0842H33.8938V38.2779Z"
                      fill="#2B6CB0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Zachary Peasley</h4>
            <p className="text-gray-500 mb-8">Software Engineer</p>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-2 mb-4">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="grid container hovereffect hover-photo">
              <img
                className="rounded-r-lg rounded-tl-lg img-size mx-auto"
                src="https://i.ibb.co/9bMB6H5/T4-JUEB3-ME-UHV013-MQF-3a9d77644b52-512.jpg"
                alt="Jarvise"
                border="0"
              ></img>
              <div class="middle flex">
                <a href="https://github.com/Fullmetal235">
                  <svg
                    className="mr-8"
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0988 5.24463C16.6425 5.23838 4.12378 17.7509 4.12378 33.1946C4.12378 45.4071 11.955 55.7884 22.8613 59.6009C24.33 59.9696 24.105 58.9259 24.105 58.2134V53.3696C15.6238 54.3634 15.28 48.7509 14.7113 47.8134C13.5613 45.8509 10.8425 45.3509 11.655 44.4134C13.5863 43.4196 15.555 44.6634 17.8363 48.0321C19.4863 50.4759 22.705 50.0634 24.3363 49.6571C24.6925 48.1884 25.455 46.8759 26.505 45.8571C17.7175 44.2821 14.055 38.9196 14.055 32.5446C14.055 29.4509 15.0738 26.6071 17.0738 24.3134C15.7988 20.5321 17.1925 17.2946 17.38 16.8134C21.0113 16.4884 24.7863 19.4134 25.08 19.6446C27.1425 19.0884 29.4988 18.7946 32.1363 18.7946C34.7863 18.7946 37.1488 19.1009 39.23 19.6634C39.9363 19.1259 43.4363 16.6134 46.8113 16.9196C46.9925 17.4009 48.355 20.5634 47.155 24.2946C49.18 26.5946 50.2113 29.4634 50.2113 32.5634C50.2113 38.9509 46.5238 44.3196 37.7113 45.8696C38.4661 46.6119 39.0654 47.4972 39.4743 48.4737C39.8831 49.4503 40.0933 50.4985 40.0925 51.5571V58.5884C40.1425 59.1509 40.0925 59.7071 41.03 59.7071C52.0988 55.9759 60.0675 45.5196 60.0675 33.2009C60.0675 17.7509 47.5425 5.24463 32.0988 5.24463Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/jarvise-billups-brown-a41a44172/">
                  <svg
                    width="64"
                    height="65"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52.9813 7.47791H11.0188C8.80006 7.47791 7.00006 9.27791 7.00006 11.4967V53.4592C7.00006 55.6779 8.80006 57.4779 11.0188 57.4779H52.9813C55.2001 57.4779 57.0001 55.6779 57.0001 53.4592V11.4967C57.0001 9.27791 55.2001 7.47791 52.9813 7.47791ZM52.9813 53.4779C24.9938 53.4717 11.0001 53.4654 11.0001 53.4592C11.0063 25.4717 11.0126 11.4779 11.0188 11.4779C39.0063 11.4842 53.0001 11.4904 53.0001 11.4967C52.9938 39.4842 52.9876 53.4779 52.9813 53.4779ZM14.4126 26.2217H21.8313V50.0842H14.4126V26.2217ZM18.1251 22.9592C20.4938 22.9592 22.4251 21.0342 22.4251 18.6592C22.4251 18.0945 22.3138 17.5353 22.0977 17.0136C21.8817 16.4919 21.5649 16.0179 21.1656 15.6186C20.7663 15.2193 20.2923 14.9026 19.7706 14.6865C19.2489 14.4704 18.6897 14.3592 18.1251 14.3592C17.5604 14.3592 17.0012 14.4704 16.4795 14.6865C15.9578 14.9026 15.4838 15.2193 15.0845 15.6186C14.6852 16.0179 14.3685 16.4919 14.1524 17.0136C13.9363 17.5353 13.8251 18.0945 13.8251 18.6592C13.8188 21.0342 15.7438 22.9592 18.1251 22.9592ZM33.8938 38.2779C33.8938 35.1654 34.4876 32.1529 38.3438 32.1529C42.1438 32.1529 42.2001 35.7092 42.2001 38.4779V50.0842H49.6126V36.9967C49.6126 30.5717 48.2251 25.6279 40.7188 25.6279C37.1126 25.6279 34.6938 27.6092 33.7001 29.4842H33.6001V26.2217H26.4813V50.0842H33.8938V38.2779Z"
                      fill="#2B6CB0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Jarvise Billups-Brown</h4>
            <p className="text-gray-500 mb-8">Software Engineer</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="grid container hovereffect hover-photo ">
              <img
                className="rounded-r-lg rounded-tl-lg img-size mx-auto"
                src="https://i.ibb.co/0Xfz8G3/T4-JUEB3-ME-UHF67-A9-T9-a3fb05aba2cd-512.jpg"
                alt="Michael"
                border="0"
              ></img>
              <div class="middle flex">
                <a href="https://github.com/mredig">
                  <svg
                    className="mr-8"
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0988 5.24463C16.6425 5.23838 4.12378 17.7509 4.12378 33.1946C4.12378 45.4071 11.955 55.7884 22.8613 59.6009C24.33 59.9696 24.105 58.9259 24.105 58.2134V53.3696C15.6238 54.3634 15.28 48.7509 14.7113 47.8134C13.5613 45.8509 10.8425 45.3509 11.655 44.4134C13.5863 43.4196 15.555 44.6634 17.8363 48.0321C19.4863 50.4759 22.705 50.0634 24.3363 49.6571C24.6925 48.1884 25.455 46.8759 26.505 45.8571C17.7175 44.2821 14.055 38.9196 14.055 32.5446C14.055 29.4509 15.0738 26.6071 17.0738 24.3134C15.7988 20.5321 17.1925 17.2946 17.38 16.8134C21.0113 16.4884 24.7863 19.4134 25.08 19.6446C27.1425 19.0884 29.4988 18.7946 32.1363 18.7946C34.7863 18.7946 37.1488 19.1009 39.23 19.6634C39.9363 19.1259 43.4363 16.6134 46.8113 16.9196C46.9925 17.4009 48.355 20.5634 47.155 24.2946C49.18 26.5946 50.2113 29.4634 50.2113 32.5634C50.2113 38.9509 46.5238 44.3196 37.7113 45.8696C38.4661 46.6119 39.0654 47.4972 39.4743 48.4737C39.8831 49.4503 40.0933 50.4985 40.0925 51.5571V58.5884C40.1425 59.1509 40.0925 59.7071 41.03 59.7071C52.0988 55.9759 60.0675 45.5196 60.0675 33.2009C60.0675 17.7509 47.5425 5.24463 32.0988 5.24463Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="http://www.linkedin.com/in/michael-redig">
                  <svg
                    width="64"
                    height="65"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52.9813 7.47791H11.0188C8.80006 7.47791 7.00006 9.27791 7.00006 11.4967V53.4592C7.00006 55.6779 8.80006 57.4779 11.0188 57.4779H52.9813C55.2001 57.4779 57.0001 55.6779 57.0001 53.4592V11.4967C57.0001 9.27791 55.2001 7.47791 52.9813 7.47791ZM52.9813 53.4779C24.9938 53.4717 11.0001 53.4654 11.0001 53.4592C11.0063 25.4717 11.0126 11.4779 11.0188 11.4779C39.0063 11.4842 53.0001 11.4904 53.0001 11.4967C52.9938 39.4842 52.9876 53.4779 52.9813 53.4779ZM14.4126 26.2217H21.8313V50.0842H14.4126V26.2217ZM18.1251 22.9592C20.4938 22.9592 22.4251 21.0342 22.4251 18.6592C22.4251 18.0945 22.3138 17.5353 22.0977 17.0136C21.8817 16.4919 21.5649 16.0179 21.1656 15.6186C20.7663 15.2193 20.2923 14.9026 19.7706 14.6865C19.2489 14.4704 18.6897 14.3592 18.1251 14.3592C17.5604 14.3592 17.0012 14.4704 16.4795 14.6865C15.9578 14.9026 15.4838 15.2193 15.0845 15.6186C14.6852 16.0179 14.3685 16.4919 14.1524 17.0136C13.9363 17.5353 13.8251 18.0945 13.8251 18.6592C13.8188 21.0342 15.7438 22.9592 18.1251 22.9592ZM33.8938 38.2779C33.8938 35.1654 34.4876 32.1529 38.3438 32.1529C42.1438 32.1529 42.2001 35.7092 42.2001 38.4779V50.0842H49.6126V36.9967C49.6126 30.5717 48.2251 25.6279 40.7188 25.6279C37.1126 25.6279 34.6938 27.6092 33.7001 29.4842H33.6001V26.2217H26.4813V50.0842H33.8938V38.2779Z"
                      fill="#2B6CB0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Michael Redig</h4>
            <p className="text-gray-500 mb-8">IOS Developer</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="grid container hovereffect hover-photo">
              <img
                className="rounded-r-lg rounded-tl-lg img-size mx-auto"
                src="https://i.ibb.co/XDpNQJz/T4-JUEB3-ME-UHUR873-EV-d88881406d1d-512.jpg"
                alt="Marlon"
                border="0"
              ></img>
              <div class="middle flex">
                <a href="https://github.com/marlonjames71">
                  <svg
                    className="mr-8"
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0988 5.24463C16.6425 5.23838 4.12378 17.7509 4.12378 33.1946C4.12378 45.4071 11.955 55.7884 22.8613 59.6009C24.33 59.9696 24.105 58.9259 24.105 58.2134V53.3696C15.6238 54.3634 15.28 48.7509 14.7113 47.8134C13.5613 45.8509 10.8425 45.3509 11.655 44.4134C13.5863 43.4196 15.555 44.6634 17.8363 48.0321C19.4863 50.4759 22.705 50.0634 24.3363 49.6571C24.6925 48.1884 25.455 46.8759 26.505 45.8571C17.7175 44.2821 14.055 38.9196 14.055 32.5446C14.055 29.4509 15.0738 26.6071 17.0738 24.3134C15.7988 20.5321 17.1925 17.2946 17.38 16.8134C21.0113 16.4884 24.7863 19.4134 25.08 19.6446C27.1425 19.0884 29.4988 18.7946 32.1363 18.7946C34.7863 18.7946 37.1488 19.1009 39.23 19.6634C39.9363 19.1259 43.4363 16.6134 46.8113 16.9196C46.9925 17.4009 48.355 20.5634 47.155 24.2946C49.18 26.5946 50.2113 29.4634 50.2113 32.5634C50.2113 38.9509 46.5238 44.3196 37.7113 45.8696C38.4661 46.6119 39.0654 47.4972 39.4743 48.4737C39.8831 49.4503 40.0933 50.4985 40.0925 51.5571V58.5884C40.1425 59.1509 40.0925 59.7071 41.03 59.7071C52.0988 55.9759 60.0675 45.5196 60.0675 33.2009C60.0675 17.7509 47.5425 5.24463 32.0988 5.24463Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/marlon-raskin/">
                  <svg
                    width="64"
                    height="65"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52.9813 7.47791H11.0188C8.80006 7.47791 7.00006 9.27791 7.00006 11.4967V53.4592C7.00006 55.6779 8.80006 57.4779 11.0188 57.4779H52.9813C55.2001 57.4779 57.0001 55.6779 57.0001 53.4592V11.4967C57.0001 9.27791 55.2001 7.47791 52.9813 7.47791ZM52.9813 53.4779C24.9938 53.4717 11.0001 53.4654 11.0001 53.4592C11.0063 25.4717 11.0126 11.4779 11.0188 11.4779C39.0063 11.4842 53.0001 11.4904 53.0001 11.4967C52.9938 39.4842 52.9876 53.4779 52.9813 53.4779ZM14.4126 26.2217H21.8313V50.0842H14.4126V26.2217ZM18.1251 22.9592C20.4938 22.9592 22.4251 21.0342 22.4251 18.6592C22.4251 18.0945 22.3138 17.5353 22.0977 17.0136C21.8817 16.4919 21.5649 16.0179 21.1656 15.6186C20.7663 15.2193 20.2923 14.9026 19.7706 14.6865C19.2489 14.4704 18.6897 14.3592 18.1251 14.3592C17.5604 14.3592 17.0012 14.4704 16.4795 14.6865C15.9578 14.9026 15.4838 15.2193 15.0845 15.6186C14.6852 16.0179 14.3685 16.4919 14.1524 17.0136C13.9363 17.5353 13.8251 18.0945 13.8251 18.6592C13.8188 21.0342 15.7438 22.9592 18.1251 22.9592ZM33.8938 38.2779C33.8938 35.1654 34.4876 32.1529 38.3438 32.1529C42.1438 32.1529 42.2001 35.7092 42.2001 38.4779V50.0842H49.6126V36.9967C49.6126 30.5717 48.2251 25.6279 40.7188 25.6279C37.1126 25.6279 34.6938 27.6092 33.7001 29.4842H33.6001V26.2217H26.4813V50.0842H33.8938V38.2779Z"
                      fill="#2B6CB0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Marlon Raskin</h4>
            <p className="text-gray-500 mb-8">IOS Developer</p>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-2 mb-4">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="grid container hovereffect hover-photo">
              <img
                className="rounded-r-lg rounded-tl-lg img-size mx-auto"
                src="https://i.ibb.co/D78c7Jp/T4-JUEB3-ME-UJWG6-UZG8-b02f88fab9ce-512.jpg"
                alt="Tylers"
                border="0"
              ></img>
              <div class="middle flex">
                <a href="https://github.com/tylernishida">
                  <svg
                    className="mr-8"
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0988 5.24463C16.6425 5.23838 4.12378 17.7509 4.12378 33.1946C4.12378 45.4071 11.955 55.7884 22.8613 59.6009C24.33 59.9696 24.105 58.9259 24.105 58.2134V53.3696C15.6238 54.3634 15.28 48.7509 14.7113 47.8134C13.5613 45.8509 10.8425 45.3509 11.655 44.4134C13.5863 43.4196 15.555 44.6634 17.8363 48.0321C19.4863 50.4759 22.705 50.0634 24.3363 49.6571C24.6925 48.1884 25.455 46.8759 26.505 45.8571C17.7175 44.2821 14.055 38.9196 14.055 32.5446C14.055 29.4509 15.0738 26.6071 17.0738 24.3134C15.7988 20.5321 17.1925 17.2946 17.38 16.8134C21.0113 16.4884 24.7863 19.4134 25.08 19.6446C27.1425 19.0884 29.4988 18.7946 32.1363 18.7946C34.7863 18.7946 37.1488 19.1009 39.23 19.6634C39.9363 19.1259 43.4363 16.6134 46.8113 16.9196C46.9925 17.4009 48.355 20.5634 47.155 24.2946C49.18 26.5946 50.2113 29.4634 50.2113 32.5634C50.2113 38.9509 46.5238 44.3196 37.7113 45.8696C38.4661 46.6119 39.0654 47.4972 39.4743 48.4737C39.8831 49.4503 40.0933 50.4985 40.0925 51.5571V58.5884C40.1425 59.1509 40.0925 59.7071 41.03 59.7071C52.0988 55.9759 60.0675 45.5196 60.0675 33.2009C60.0675 17.7509 47.5425 5.24463 32.0988 5.24463Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/tyler-nishida/">
                  <svg
                    width="64"
                    height="65"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52.9813 7.47791H11.0188C8.80006 7.47791 7.00006 9.27791 7.00006 11.4967V53.4592C7.00006 55.6779 8.80006 57.4779 11.0188 57.4779H52.9813C55.2001 57.4779 57.0001 55.6779 57.0001 53.4592V11.4967C57.0001 9.27791 55.2001 7.47791 52.9813 7.47791ZM52.9813 53.4779C24.9938 53.4717 11.0001 53.4654 11.0001 53.4592C11.0063 25.4717 11.0126 11.4779 11.0188 11.4779C39.0063 11.4842 53.0001 11.4904 53.0001 11.4967C52.9938 39.4842 52.9876 53.4779 52.9813 53.4779ZM14.4126 26.2217H21.8313V50.0842H14.4126V26.2217ZM18.1251 22.9592C20.4938 22.9592 22.4251 21.0342 22.4251 18.6592C22.4251 18.0945 22.3138 17.5353 22.0977 17.0136C21.8817 16.4919 21.5649 16.0179 21.1656 15.6186C20.7663 15.2193 20.2923 14.9026 19.7706 14.6865C19.2489 14.4704 18.6897 14.3592 18.1251 14.3592C17.5604 14.3592 17.0012 14.4704 16.4795 14.6865C15.9578 14.9026 15.4838 15.2193 15.0845 15.6186C14.6852 16.0179 14.3685 16.4919 14.1524 17.0136C13.9363 17.5353 13.8251 18.0945 13.8251 18.6592C13.8188 21.0342 15.7438 22.9592 18.1251 22.9592ZM33.8938 38.2779C33.8938 35.1654 34.4876 32.1529 38.3438 32.1529C42.1438 32.1529 42.2001 35.7092 42.2001 38.4779V50.0842H49.6126V36.9967C49.6126 30.5717 48.2251 25.6279 40.7188 25.6279C37.1126 25.6279 34.6938 27.6092 33.7001 29.4842H33.6001V26.2217H26.4813V50.0842H33.8938V38.2779Z"
                      fill="#2B6CB0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Tyler Nishida</h4>
            <p className="text-gray-500 mb-8">UX Designer</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="grid container hover-photo hovereffect">
              <img
                className="img-responsive rounded-r-lg rounded-tl-lg img-size mx-auto"
                src="https://i.ibb.co/vLwBkbX/T4-JUEB3-ME-UGVBY5-QK0-0322eb799fbf-512.jpg"
                alt="Emily"
                border="0"
              ></img>
              <div class="middle flex">
                <a href="https://github.com/Ehuntwork">
                  <svg
                    className="mr-8"
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0988 5.24463C16.6425 5.23838 4.12378 17.7509 4.12378 33.1946C4.12378 45.4071 11.955 55.7884 22.8613 59.6009C24.33 59.9696 24.105 58.9259 24.105 58.2134V53.3696C15.6238 54.3634 15.28 48.7509 14.7113 47.8134C13.5613 45.8509 10.8425 45.3509 11.655 44.4134C13.5863 43.4196 15.555 44.6634 17.8363 48.0321C19.4863 50.4759 22.705 50.0634 24.3363 49.6571C24.6925 48.1884 25.455 46.8759 26.505 45.8571C17.7175 44.2821 14.055 38.9196 14.055 32.5446C14.055 29.4509 15.0738 26.6071 17.0738 24.3134C15.7988 20.5321 17.1925 17.2946 17.38 16.8134C21.0113 16.4884 24.7863 19.4134 25.08 19.6446C27.1425 19.0884 29.4988 18.7946 32.1363 18.7946C34.7863 18.7946 37.1488 19.1009 39.23 19.6634C39.9363 19.1259 43.4363 16.6134 46.8113 16.9196C46.9925 17.4009 48.355 20.5634 47.155 24.2946C49.18 26.5946 50.2113 29.4634 50.2113 32.5634C50.2113 38.9509 46.5238 44.3196 37.7113 45.8696C38.4661 46.6119 39.0654 47.4972 39.4743 48.4737C39.8831 49.4503 40.0933 50.4985 40.0925 51.5571V58.5884C40.1425 59.1509 40.0925 59.7071 41.03 59.7071C52.0988 55.9759 60.0675 45.5196 60.0675 33.2009C60.0675 17.7509 47.5425 5.24463 32.0988 5.24463Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/emily-arias-921924181/">
                  <svg
                    width="64"
                    height="65"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52.9813 7.47791H11.0188C8.80006 7.47791 7.00006 9.27791 7.00006 11.4967V53.4592C7.00006 55.6779 8.80006 57.4779 11.0188 57.4779H52.9813C55.2001 57.4779 57.0001 55.6779 57.0001 53.4592V11.4967C57.0001 9.27791 55.2001 7.47791 52.9813 7.47791ZM52.9813 53.4779C24.9938 53.4717 11.0001 53.4654 11.0001 53.4592C11.0063 25.4717 11.0126 11.4779 11.0188 11.4779C39.0063 11.4842 53.0001 11.4904 53.0001 11.4967C52.9938 39.4842 52.9876 53.4779 52.9813 53.4779ZM14.4126 26.2217H21.8313V50.0842H14.4126V26.2217ZM18.1251 22.9592C20.4938 22.9592 22.4251 21.0342 22.4251 18.6592C22.4251 18.0945 22.3138 17.5353 22.0977 17.0136C21.8817 16.4919 21.5649 16.0179 21.1656 15.6186C20.7663 15.2193 20.2923 14.9026 19.7706 14.6865C19.2489 14.4704 18.6897 14.3592 18.1251 14.3592C17.5604 14.3592 17.0012 14.4704 16.4795 14.6865C15.9578 14.9026 15.4838 15.2193 15.0845 15.6186C14.6852 16.0179 14.3685 16.4919 14.1524 17.0136C13.9363 17.5353 13.8251 18.0945 13.8251 18.6592C13.8188 21.0342 15.7438 22.9592 18.1251 22.9592ZM33.8938 38.2779C33.8938 35.1654 34.4876 32.1529 38.3438 32.1529C42.1438 32.1529 42.2001 35.7092 42.2001 38.4779V50.0842H49.6126V36.9967C49.6126 30.5717 48.2251 25.6279 40.7188 25.6279C37.1126 25.6279 34.6938 27.6092 33.7001 29.4842H33.6001V26.2217H26.4813V50.0842H33.8938V38.2779Z"
                      fill="#2B6CB0"
                    />
                  </svg>
                </a>
              </div>
            </div>
  
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Emily Arias</h4>
            <p className="text-gray-500 mb-8">UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
