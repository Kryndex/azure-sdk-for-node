/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Report data.
 *
 */
class ReportRecordContract {
  /**
   * Create a ReportRecordContract.
   * @member {string} [name] Name depending on report endpoint specifies
   * product, API, operation or developer name.
   * @member {date} [timestamp] Start of aggregation period. The date conforms
   * to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO
   * 8601 standard.
   * @member {string} [interval] Length of agregation period.  Interval must be
   * multiple of 15 minutes and may not be zero. The value should be in ISO
   * 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).
   * @member {string} [country] Country to which this record data is related.
   * @member {string} [region] Country region to which this record data is
   * related.
   * @member {string} [zip] Zip code to which this record data is related.
   * @member {string} [userId] User identifier path. /users/{userId}
   * @member {string} [productId] Product identifier path.
   * /products/{productId}
   * @member {string} [apiId] API identifier path. /apis/{apiId}
   * @member {string} [operationId] Operation identifier path.
   * /apis/{apiId}/operations/{operationId}
   * @member {string} [apiRegion] API region identifier.
   * @member {string} [subscriptionId] Subscription identifier path.
   * /subscriptions/{subscriptionId}
   * @member {number} [callCountSuccess] Number of succesful calls. This
   * includes calls returning HttpStatusCode <= 301 and
   * HttpStatusCode.NotModified and HttpStatusCode.TemporaryRedirect
   * @member {number} [callCountBlocked] Number of calls blocked due to invalid
   * credentials. This includes calls returning HttpStatusCode.Unauthorize and
   * HttpStatusCode.Forbidden and HttpStatusCode.TooManyRequests
   * @member {number} [callCountFailed] Number of calls failed due to proxy or
   * backend errors. This includes calls returning
   * HttpStatusCode.BadRequest(400) and any Code between
   * HttpStatusCode.InternalServerError (500) and 600
   * @member {number} [callCountOther] Number of other calls.
   * @member {number} [callCountTotal] Total number of calls.
   * @member {number} [bandwidth] Bandwidth consumed.
   * @member {number} [cacheHitCount] Number of times when content was served
   * from cache policy.
   * @member {number} [cacheMissCount] Number of times content was fetched from
   * backend.
   * @member {number} [apiTimeAvg] Average time it took to process request.
   * @member {number} [apiTimeMin] Minimum time it took to process request.
   * @member {number} [apiTimeMax] Maximum time it took to process request.
   * @member {number} [serviceTimeAvg] Average time it took to process request
   * on backend.
   * @member {number} [serviceTimeMin] Minimum time it took to process request
   * on backend.
   * @member {number} [serviceTimeMax] Maximum time it took to process request
   * on backend.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReportRecordContract
   *
   * @returns {object} metadata of ReportRecordContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReportRecordContract',
      type: {
        name: 'Composite',
        className: 'ReportRecordContract',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          timestamp: {
            required: false,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          },
          interval: {
            required: false,
            serializedName: 'interval',
            type: {
              name: 'String'
            }
          },
          country: {
            required: false,
            serializedName: 'country',
            type: {
              name: 'String'
            }
          },
          region: {
            required: false,
            serializedName: 'region',
            type: {
              name: 'String'
            }
          },
          zip: {
            required: false,
            serializedName: 'zip',
            type: {
              name: 'String'
            }
          },
          userId: {
            required: false,
            readOnly: true,
            serializedName: 'userId',
            type: {
              name: 'String'
            }
          },
          productId: {
            required: false,
            readOnly: true,
            serializedName: 'productId',
            type: {
              name: 'String'
            }
          },
          apiId: {
            required: false,
            serializedName: 'apiId',
            type: {
              name: 'String'
            }
          },
          operationId: {
            required: false,
            serializedName: 'operationId',
            type: {
              name: 'String'
            }
          },
          apiRegion: {
            required: false,
            serializedName: 'apiRegion',
            type: {
              name: 'String'
            }
          },
          subscriptionId: {
            required: false,
            serializedName: 'subscriptionId',
            type: {
              name: 'String'
            }
          },
          callCountSuccess: {
            required: false,
            serializedName: 'callCountSuccess',
            type: {
              name: 'Number'
            }
          },
          callCountBlocked: {
            required: false,
            serializedName: 'callCountBlocked',
            type: {
              name: 'Number'
            }
          },
          callCountFailed: {
            required: false,
            serializedName: 'callCountFailed',
            type: {
              name: 'Number'
            }
          },
          callCountOther: {
            required: false,
            serializedName: 'callCountOther',
            type: {
              name: 'Number'
            }
          },
          callCountTotal: {
            required: false,
            serializedName: 'callCountTotal',
            type: {
              name: 'Number'
            }
          },
          bandwidth: {
            required: false,
            serializedName: 'bandwidth',
            type: {
              name: 'Number'
            }
          },
          cacheHitCount: {
            required: false,
            serializedName: 'cacheHitCount',
            type: {
              name: 'Number'
            }
          },
          cacheMissCount: {
            required: false,
            serializedName: 'cacheMissCount',
            type: {
              name: 'Number'
            }
          },
          apiTimeAvg: {
            required: false,
            serializedName: 'apiTimeAvg',
            type: {
              name: 'Number'
            }
          },
          apiTimeMin: {
            required: false,
            serializedName: 'apiTimeMin',
            type: {
              name: 'Number'
            }
          },
          apiTimeMax: {
            required: false,
            serializedName: 'apiTimeMax',
            type: {
              name: 'Number'
            }
          },
          serviceTimeAvg: {
            required: false,
            serializedName: 'serviceTimeAvg',
            type: {
              name: 'Number'
            }
          },
          serviceTimeMin: {
            required: false,
            serializedName: 'serviceTimeMin',
            type: {
              name: 'Number'
            }
          },
          serviceTimeMax: {
            required: false,
            serializedName: 'serviceTimeMax',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ReportRecordContract;
