/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

class DamRoute extends BaseRoute {
  getSubscription = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'user_subscription',
      })
    );
  };

  updateDamSubscription = (data) => {
    return AesirXApiInstance.put(
      this.createRequestURL({
        option: 'user_subscription',
      }),
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  getAsset = (id) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'dam_asset',
        id: id,
      })
    );
  };

  getAssets = (collectionId = 0, dataFilter = {}) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'dam_asset',
        'filter[collection_id]': collectionId,
        ...dataFilter,
      })
    );
  };

  searchAssets = (dataFilter = {}) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'dam_asset',
        ...dataFilter,
      })
    );
  };

  createAssets = (data) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: 'dam_asset',
      }),
      data
    );
  };

  updateAssets = (data) => {
    return AesirXApiInstance.put(
      this.createRequestURL({
        option: 'dam_asset',
      }),
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  };

  deleteAssets = (ids) => {
    return AesirXApiInstance.delete(
      this.createRequestURL({
        option: 'dam_asset',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: ids,
      }
    );
  };

  getCollection = (id) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'dam_collection',
        id: id,
      })
    );
  };

  getCollections = (collectionId = 0, dataFilter = {}) => {
    if (collectionId) {
      // Todo
      // Filter single collection
    }
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'dam_collection',
        // 'filter[id]': collectionId,
        ...dataFilter,
      })
    );
  };

  searchCollections = (dataFilter = {}) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'dam_collection',
        ...dataFilter,
      })
    );
  };

  createCollections = (data) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: 'dam_collection',
      }),
      data
    );
  };

  updateCollections = (data) => {
    return AesirXApiInstance.put(
      this.createRequestURL({
        option: 'dam_collection',
      }),
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  };

  deleteCollections = (ids) => {
    return AesirXApiInstance.delete(
      this.createRequestURL({
        option: 'dam_collection',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: ids,
      }
    );
  };

  moveToFolder = (data) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: 'dam_collection',
        task: 'changeParrentId',
      }),
      data
    );
  };

  downloadCollections = (ids) => {
    return AesirXApiInstance.post(
      this.createRequestURL({
        option: 'dam_collection',
        task: 'downloadFiles',
      }),
      ids,
      {
        responseType: 'blob',
      }
    );
  };
}

export default DamRoute;
