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
 * Represents the state of the secondary replicator from the primary
 * replicator’s point of view.
 *
 *
 */
class RemoteReplicatorStatus {
  /**
   * Create a RemoteReplicatorStatus.
   * @member {string} [replicaId]
   * @member {date} [lastAcknowledgementProcessedTimeUtc] The last timestamp
   * (in UTC) when an acknowledgement from the secondary replicator was
   * processed on the primary.
   * UTC 0 represents an invalid value, indicating that no acknowledgement
   * messages were ever processed.
   * @member {string} [lastReceivedReplicationSequenceNumber] The highest
   * replication operation sequence number that the secondary has received from
   * the primary.
   * @member {string} [lastAppliedReplicationSequenceNumber] The highest
   * replication operation sequence number that the secondary has applied to
   * its state.
   * @member {boolean} [isInBuild] A value that indicates whether the secondary
   * replica is in the process of being built.
   * @member {string} [lastReceivedCopySequenceNumber] The highest copy
   * operation sequence number that the secondary has received from the
   * primary.
   * A value of -1 implies that the secondary has received all copy operations.
   * @member {string} [lastAppliedCopySequenceNumber] The highest copy
   * operation sequence number that the secondary has applied to its state.
   * A value of -1 implies that the secondary has applied all copy operations
   * and the copy process is complete.
   * @member {object} [remoteReplicatorAcknowledgementStatus]
   * @member {object}
   * [remoteReplicatorAcknowledgementStatus.replicationStreamAcknowledgementDetail]
   * @member {string}
   * [remoteReplicatorAcknowledgementStatus.replicationStreamAcknowledgementDetail.averageReceiveDuration]
   * Represents the average duration it takes for the remote replicator to
   * receive an operation.
   * @member {string}
   * [remoteReplicatorAcknowledgementStatus.replicationStreamAcknowledgementDetail.averageApplyDuration]
   * Represents the average duration it takes for the remote replicator to
   * apply an operation. This usually entails writing the operation to disk.
   * @member {string}
   * [remoteReplicatorAcknowledgementStatus.replicationStreamAcknowledgementDetail.notReceivedCount]
   * Represents the number of operations not yet received by a remote
   * replicator.
   * @member {string}
   * [remoteReplicatorAcknowledgementStatus.replicationStreamAcknowledgementDetail.receivedAndNotAppliedCount]
   * Represents the number of operations received and not yet applied by a
   * remote replicator.
   * @member {object}
   * [remoteReplicatorAcknowledgementStatus.copyStreamAcknowledgementDetail]
   * @member {string}
   * [remoteReplicatorAcknowledgementStatus.copyStreamAcknowledgementDetail.averageReceiveDuration]
   * Represents the average duration it takes for the remote replicator to
   * receive an operation.
   * @member {string}
   * [remoteReplicatorAcknowledgementStatus.copyStreamAcknowledgementDetail.averageApplyDuration]
   * Represents the average duration it takes for the remote replicator to
   * apply an operation. This usually entails writing the operation to disk.
   * @member {string}
   * [remoteReplicatorAcknowledgementStatus.copyStreamAcknowledgementDetail.notReceivedCount]
   * Represents the number of operations not yet received by a remote
   * replicator.
   * @member {string}
   * [remoteReplicatorAcknowledgementStatus.copyStreamAcknowledgementDetail.receivedAndNotAppliedCount]
   * Represents the number of operations received and not yet applied by a
   * remote replicator.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RemoteReplicatorStatus
   *
   * @returns {object} metadata of RemoteReplicatorStatus
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RemoteReplicatorStatus',
      type: {
        name: 'Composite',
        className: 'RemoteReplicatorStatus',
        modelProperties: {
          replicaId: {
            required: false,
            serializedName: 'ReplicaId',
            type: {
              name: 'String'
            }
          },
          lastAcknowledgementProcessedTimeUtc: {
            required: false,
            serializedName: 'LastAcknowledgementProcessedTimeUtc',
            type: {
              name: 'DateTime'
            }
          },
          lastReceivedReplicationSequenceNumber: {
            required: false,
            serializedName: 'LastReceivedReplicationSequenceNumber',
            type: {
              name: 'String'
            }
          },
          lastAppliedReplicationSequenceNumber: {
            required: false,
            serializedName: 'LastAppliedReplicationSequenceNumber',
            type: {
              name: 'String'
            }
          },
          isInBuild: {
            required: false,
            serializedName: 'IsInBuild',
            type: {
              name: 'Boolean'
            }
          },
          lastReceivedCopySequenceNumber: {
            required: false,
            serializedName: 'LastReceivedCopySequenceNumber',
            type: {
              name: 'String'
            }
          },
          lastAppliedCopySequenceNumber: {
            required: false,
            serializedName: 'LastAppliedCopySequenceNumber',
            type: {
              name: 'String'
            }
          },
          remoteReplicatorAcknowledgementStatus: {
            required: false,
            serializedName: 'RemoteReplicatorAcknowledgementStatus',
            type: {
              name: 'Composite',
              className: 'RemoteReplicatorAcknowledgementStatus'
            }
          }
        }
      }
    };
  }
}

module.exports = RemoteReplicatorStatus;