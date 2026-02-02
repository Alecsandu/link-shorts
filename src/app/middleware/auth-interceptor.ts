import {HttpInterceptorFn} from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = localStorage.getItem("access_token");

  if (accessToken) {
    const clonedRequest = req.clone();

    clonedRequest.headers.set("Authorization", "Bearer " + accessToken);

    return next(clonedRequest);
  } else {
    return next(req);
  }
};
