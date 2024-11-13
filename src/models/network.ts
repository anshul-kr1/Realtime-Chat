// NOTE: Action names are limited to 12 characters, otherwise Trystero breaks.
export enum PeerActions {
  MESSAGE = 'MESSAGE',
  MEDIA_MESSAGE = 'MEDIA_MSG',
  MESSAGE_TRANSCRIPT = 'MSG_XSCRIPT',
  PEER_METADATA = 'PEER_META',
  AUDIO_CHANGE = 'AUDIO_CHANGE',
  VIDEO_CHANGE = 'VIDEO_CHANGE',
  SCREEN_SHARE = 'SCREEN_SHARE',
  FILE_OFFER = 'FILE_OFFER',
  TYPING_STATUS_CHANGE = 'TYPNG_CHANGE',
  VERIFICATION_TOKEN_ENCRYPTED = 'V_TKN_ENC',
  VERIFICATION_TOKEN_RAW = 'V_TKN_RAW',
}
