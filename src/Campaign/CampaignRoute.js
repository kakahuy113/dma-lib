/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirXApiInstance from '../gateway/Instance';
import BaseRoute from '../Abstract/BaseRoute';

/**
 * Class CampaignRoute extends BaseRoute
 */
class CampaignRoute extends BaseRoute {
  /**
   * function getCampaignRequest get specified Campaign Data from Aesir Redcore WS
   * @param  campaignId
   * @return JSON
   */
  getCampaignRequest = (campaignId) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'campaign',
        id: campaignId,
      })
    );
  };

  /**
   *
   * @param data
   */
  createCampaignRequest = (data) =>
    AesirXApiInstance.post(
      this.createRequestURL({
        option: 'campaign',
      }),
      data
    );

  /**
   *
   * @param data
   */
  updateCampaignRequest = (data) =>
    AesirXApiInstance.put(
      this.createRequestURL({
        option: 'campaign',
      }),
      data
    );

  /**
   *
   * @param campaignId
   */
  deleteCampaignRequest = (campaignId) => {
    const ids = campaignId.split(',');

    if (ids.length < 2) {
      return AesirXApiInstance.delete(
        this.createRequestURL({
          option: 'campaign',
          id: campaignId,
        })
      );
    } else {
      return AesirXApiInstance.post(
        this.createRequestURL({
          option: 'campaign',
          task: 'deleteAll',
        }),
        {
          id: campaignId,
        }
      );
    }
  };

  /**
   *
   * @param page
   * @param limit
   */
  getCampaignListRequest = (page = 1, limit = 20) =>
    AesirXApiInstance.get(
      this.createRequestURL({
        option: 'campaign',
        'list[limitstart]': (page - 1) * limit,
        'list[limit]': limit,
      })
    );

  getCampaignMasterDataRequest = () => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'campaign',
        task: 'getMasterData',
      })
    );
  };

  searchCampaignsRequest = (dataFilter, page = 1, limit = 20) => {
    return AesirXApiInstance.get(
      this.createRequestURL({
        option: 'campaign',
        task: 'filterCampaign',
        limitStart: (page - 1) * limit,
        limit: limit,
        ...dataFilter,
      })
    );
  };
}

export default CampaignRoute;
