/**
 * WorkBuddy 云服务接入配置
 * endpoint / publishableKey 来自云服务开通时返回的 publicConfig，二者均为公开值。
 * 客户端只使用这一份初始化配置，Auth / Database 共用同一个 cloud 实例。
 */
const publicConfig = {
  endpoint: 'https://moutai-reunion-2026.app.workbuddy.host',
  publishableKey: 'wbpk_UicXiTKyBaTHfvEC34zaFE_v6syx0ow8iFdidBcbsHTtoFYFnjGbyeL'
};

let cloudClient = null;
function getCloud() {
  if (!cloudClient) {
    cloudClient = WorkBuddyCloud.createWorkBuddyCloud({
      endpoint: publicConfig.endpoint,
      publishableKey: publicConfig.publishableKey
    });
  }
  return cloudClient;
}
