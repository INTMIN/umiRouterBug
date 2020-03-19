import { RequestConfig } from 'umi';
export const dva = {
  config: {
    onError(err:any) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
export async function getInitialState() {
  // const data = await fetchXXX();
  // return data;
}



export const request: RequestConfig = {
  errorConfig: {
    adaptor: (resData) => {
      return {
        ...resData,
        success: resData.errorno===0,
        errorMessage: resData.msg,
      };
    },
  },
};
