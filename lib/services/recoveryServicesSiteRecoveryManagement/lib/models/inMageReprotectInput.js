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

const models = require('./index');

/**
 * InMageAzureV2 specific provider input.
 *
 * @extends models['ReverseReplicationProviderSpecificInput']
 */
class InMageReprotectInput extends models['ReverseReplicationProviderSpecificInput'] {
  /**
   * Create a InMageReprotectInput.
   * @member {string} masterTargetId The Master Target Id.
   * @member {string} processServerId The Process Server Id.
   * @member {string} retentionDrive The retention drive to use on the MT.
   * @member {string} [runAsAccountId] The CS account Id.
   * @member {string} [datastoreName] The target datastore name.
   * @member {object} [diskExclusionInput] The enable disk exclusion input.
   * @member {array} [diskExclusionInput.volumeOptions] The volume label based
   * option for disk exclusion.
   * @member {array} [diskExclusionInput.diskSignatureOptions] The guest disk
   * signature based option for disk exclusion.
   * @member {string} profileId The Policy Id.
   * @member {array} [disksToInclude] The disks to include list.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of InMageReprotectInput
   *
   * @returns {object} metadata of InMageReprotectInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'InMage',
      type: {
        name: 'Composite',
        className: 'InMageReprotectInput',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            type: {
              name: 'String'
            }
          },
          masterTargetId: {
            required: true,
            serializedName: 'masterTargetId',
            type: {
              name: 'String'
            }
          },
          processServerId: {
            required: true,
            serializedName: 'processServerId',
            type: {
              name: 'String'
            }
          },
          retentionDrive: {
            required: true,
            serializedName: 'retentionDrive',
            type: {
              name: 'String'
            }
          },
          runAsAccountId: {
            required: false,
            serializedName: 'runAsAccountId',
            type: {
              name: 'String'
            }
          },
          datastoreName: {
            required: false,
            serializedName: 'datastoreName',
            type: {
              name: 'String'
            }
          },
          diskExclusionInput: {
            required: false,
            serializedName: 'diskExclusionInput',
            type: {
              name: 'Composite',
              className: 'InMageDiskExclusionInput'
            }
          },
          profileId: {
            required: true,
            serializedName: 'profileId',
            type: {
              name: 'String'
            }
          },
          disksToInclude: {
            required: false,
            serializedName: 'disksToInclude',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = InMageReprotectInput;