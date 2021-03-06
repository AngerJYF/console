/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import { action } from 'mobx'

import { DEFAULT_QUERY_STATUS } from 'configs/openpitrix/version'

import Base from './base'

export default class Version extends Base {
  resourceName = 'versions'

  sortKey = 'sequence'

  defaultStatus = DEFAULT_QUERY_STATUS

  // data action value is: submit、cancel、release、suspend、recover
  @action
  handle = async ({ app_id, version_id, ...data } = {}) => {
    const url = this.getUrl({ app_id, version_id, name: 'action' })
    return await this.submitting(request.post(url, data))
  }
}
