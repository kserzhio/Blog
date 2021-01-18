import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminAuthState, ADMIN_AUTH_FEATURENAME } from './admin-auth.reducer';

const getFeature = createFeatureSelector<AdminAuthState>(
  ADMIN_AUTH_FEATURENAME
);

export const getLoading = createSelector(getFeature, (state) => state.loading);
export const getLoaded = createSelector(getFeature, (state) => state.loaded);
export const getServerError = createSelector(
  getFeature,
  (state) => state.serverError
);
export const getAuthDate = createSelector(
  getFeature,
  (state) => state.authData
);
export const getAccessToken = createSelector(
  getAuthDate,
  (authData) => authData && authData.accessToken
);
export const isAuth = createSelector(
  getAccessToken,
  (accessToken) => !!accessToken
);
