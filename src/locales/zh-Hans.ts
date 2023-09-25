import { Translations } from '../core/translations';

export const translations: Translations = {
  common: {
    readthedocs: '阅读使用手册',
    report: '反馈问题',
    confirm: '确认',
    cancel: '取消',
    ok: 'OK',
    error: '错误',
    success: '成功!',
    copy: '复制到剪贴板',
    download: '下载',
    dropOrClick: '拖动文件至此处或<em>点此上传</em>',
    started: 'Krill起始运行时间为',
    newversion: '有版本更新！',
    supportcontracts: '服务合同',
    warning: '警告',
    idle: '您因无活动而被登出。',
    nodata: '无数据',
    copySuccess: 'XML已复制到您的剪贴板',
    edit: '编辑',
    page: '页面',
    userInfo: {
      title: '登录数据',
      user: '用户',
    },
  },
  login: {
    password: '密码',
    placeholder: '您的密码',
    signin: '登录',
    required: '请输入您的密码',
    error: '您输入的密钥有误',
    copied:
      "请勿使用从<a href='https://xkcd.com/936/' target='_blank'>https://xkcd.com/936/</a>获得的密码",
    id: '用户名',
    idPlaceholder: '您的用户名',
    idRequired: '请输入您的用户名',
    retry: '点击{0}返回登陆页面。',
    here: '这里',
  },
  onboarding: {
    welcome: '欢迎来到Krill',
    welcomeHtml:
      "让我们从创建您的RPKI证书颁发机构（CA）开始。它将被用来配置通常为一或多个区域或国家互联网注册管理机构父级CA下发的RPKI。<br><br>您选择的handle会被用来在与父级或子级CA交互过程中识别您的CA。它将不会在RPKI中发布。请选择能让他人识别出您机构的handle。设置后handle将无法更改。",
    addCAForm: {
      required: '此为必填项',
      format: '这不是有效的CA名称',
      confirm: '创建CA',
      confirmation: {
        title: '警告',
        message: '设置后handle将无法更改。是否继续？',
      },
    },
  },
  cas: {
    loading: '加载证书颁发机构中',
    ca: '证书颁发机构',
    cas: '证书颁发机构',
    search: '搜索CAs⋯⋯',
    noCas: '当前没有已被界定的证书颁发机构。',
  },
  caDetails: {
    loading: '加载{handle}中',
    refresh: '刷新{handle}中，可能需要稍作等待',
    current: '当前证书颁发机构',
    download: '下载PEM',
    noRoas: '未找到ROA。',
    noResources: '您暂未获得任何资源',
    noChildren: '未发现子CA',
    addRoa: '添加ROA',
    roas: 'ROA',
    resources: '资源',
    parents: '父级CA',
    repo: '数据库',
    type: '类型',
    properties: '特性',
    property: '特性',
    value: '数值',
    kind: '类别',
    resource: '资源',
    children: '子项',
    handle: 'Handle',
    comment: '备注',
    maxLength: '最大长度',
    maxLengthTooltip:
      '若不指定最大长度，该长度默认为地址前缀的掩码长度。',
    confirmation: {
      title: '警告',
      message:
        "此举将会移除ROA '{prefix}-{max_length} => {asn}'。是否继续？",
      added: '已添加ROA',
      retired: '已移除ROA',
      retiredSuccess: '该ROA已被移除',
      addedSuccess: '该ROA已被添加',
      commentUpdatedSuccess: '该ROA的备注已更新',
    },
    addROAForm: {
      required: '该项为必填项',
      asn_format: '这不是有效的ASN',
      prefix_format: '请输入有效的IPv4或IPv6前缀',
    },
    onboardingWarning:
      '您需要将您的CA与可发布您的证书及ROA的公共RPKI数据库相连接。当父级CA配置完成时，关联的受信任软件将立即开始下载您于此数据库创建的证书及ROA。',
    initializeRepository:
      '在您的CA向父级CA申请资源证书前您仍需为它设置一个数据库',
    initialize:
      '请先初始化RPKI数据库及/或父级CA。',
    noResourcesYet: '您暂未获得任何资源',
    clickToRefresh: '点此刷新',
    parentsTab: {
      request: '子CA请求',
      response: '父级CA应答',
      addParent: '添加额外的父级CA',
      addParentSuccess: '父级CA已添加',
      name: '父级CA名称',
      namerequired: '父级CA名称为必填项',
      nameformat: '该父级CA名称无效',
    },
    repoTab: {
      request: '发布者申请',
      addRepo: '添加数据库',
      response: '数据库应答',
      addRepoSuccess: '数据库已添加',
    },
    analyseThis: '分析我的ROA',
    analysis: 'ROA分析',
    suggestions: {
      following: '请确认以下关于您ROA的建议更新。',
      readMore: '阅读更多⋯⋯',
      nochanges: '当前无变更建议',
      adding: '添加中',
      removing: 'ROA移除中',
      keep: '请依原样保留。',
      willResult: '将会导致',
      yourChoice: '您的选择',
      ourSuggestion: '我们的建议',
      ourSuggestionHelp:
        '我们的建议是建立在RIPE RIS路由信息上的，请确认！',
      addThis: '添加该',
      removeThis: '移除该',
      willAdd: '将会添加该ROA',
      willRemove: '将会移除移除该ROA',
      reasons: {
        not_found: '允许未被您ROA涵盖的路由宣告',
        not_held:
          'ROA无法发布，您的证书不再包含相关的地址前缀',
        invalid_asn: '允许来自新的ASN的路由宣告',
        invalid_length: '允许该ASN相关更详细前缀的路由宣告',
        stale: '未发现与ROA相关的宣告',
        disallowing:
          '该ROA仅能禁止路由宣告。若这是您的诉求，我们推荐创建AS0的ROA。',
        as0_redundant: 'ROA冗余',
        redundant: 'ROA冗余',
        too_permissive:
          'ROA允许额外的路由宣告，这可能被路径欺骗攻击滥用',
        specific:
          '在ROA中允许可能过于宽容的详细路由宣告',
        new: '新',
      },
    },
    syncParents: '更新父级CA',
    syncRepo: '更新数据库',
    lastExchange: '最近交换',
    exchangeUri: 'URI',
    nextExchange: '下次交换前',
    allResources: '所有资源',
    entitlements: '授权机制',
    showEntitlements: '显示授权机制详情',
    parentCertificate: '父级证书',
    published: '已发布',
  },
  announcements: {
    noRoasOrAnnouncements: '未发现ROA或路由宣告。',
    search: '搜索ASN，地址前缀，状态中⋯⋯',
    authorizes: '授权了{number}个路由宣告',
    disallows: '禁止了{number}个路由宣告',
    asn: 'ASN',
    prefix: '前缀',
    stateLabel: '状态',
    state: {
      roa_seen: '可见',
      roa_seen_help: '该ROA符合BGP中可见的路由宣告',
      roa_unseen: '不可见',
      roa_unseen_help: '未找到符合该ROA的BGP路由宣告',
      roa_not_held: '前缀已移除',
      roa_not_held_help:
        '该前缀已不在您的证书上，这条ROA将不会被发布',
      roa_no_announcement_info: '无路由宣告信息',
      roa_too_permissive: '过于宽容',
      roa_too_permissive_help:
        '该ROA符合BGP中的路由宣告，但同时也允许不可见的路由宣告',
      roa_disallowing: '禁止中',
      roa_disallowing_help:
        '该ROA仅能禁止路由宣告。若这是您的诉求，推荐创建AS0的ROA。',
      roa_redundant: '冗余',
      roa_redundant_help:
        '由于存在一或多个该前缀，掩码及ASN相关的ROA，该ROA是多余的',
      roa_as0: 'AS0',
      roa_as0_help:
        '通过该ROA可禁止某一前缀的所有路由宣告',
      roa_as0_redundant: '冗余',
      roa_as0_redundant_help:
        '由于存在一或多个该前缀相关的ROA，因此该AS0 ROA是多余的',
      announcement_not_found: '未找到',
      announcement_not_found_help:
        '该路由宣告未被您的ROA保护',
      announcement_invalid_length: '无效掩码',
      announcement_invalid_length_help:
        '该路由宣告因前缀及其最大长度比您给予该ASN的授权更大而不被允许',
      announcement_invalid_asn: '无效ASN',
      announcement_invalid_asn_help:
        '该路由宣告因您仅将该前缀授权给另一ASN而不被允许',
      announcement_disallowed: 'DISALLOWED BY AS0',
      announcement_disallowed_help:
        'This announcement is not allowed because you have an AS0 ROA that disallows it',
    },
    download: '下载CSV',
  },
  deltaErrors: {
    duplicates: '已存在该ROA',
    covered: '存在被覆盖的ROA',
    notheld: '不是您的前缀',
    unknowns: '未知',
    invalid_length: '无效掩码长度',
    covering: '正在覆盖现有的ROA',
    as0_exists: '存在AS0',
    as0_overlaps: '存在被覆盖的ROA',
  },
  errors: {
    repo_not_set: '您必须先设置数据库',
    pub_unknown: "未知发布者：'{publisher}'",
    pub_duplicate: "发布者：'{publisher}'已被初始化",
    pub_outside_jail:
      "发布者uri：'{uri}'不在数据库uri：'{sia_base}'中",
    pub_uri_no_slash: "发布者uri '{uri}'必须以右斜杠结尾",
    pub_no_embedded_repo: '无已配置的内置数据库',
    ca_duplicate: "名为'{ca}'的CA已被初始化",
    ca_unknown: "未知CA：'{ca}'",
    ca_repo_same: '该数据库正在使用中',
    ca_repo_issue: '从数据库收到错误: {cause}',
    ca_repo_response_invalid_xml: '返回无效数据库应答xml',
    ca_repo_response_wrong_xml: '收到父级CA应答而非数据库应答',
    ca_parent_duplicate: "名为'{parent}'的父级CA已存在",
    ca_parent_xml_duplicate:
      "该响应已被名为'{parent}'的父级CA使用",
    ca_parent_unknown: "您没有名为'{parent}'的父级CA",
    ca_parent_issue: "从父级CA '{parent}'收到错误: {cause}",
    ca_parent_response_invalid_xml: '收到无效的父级CA应答xml',
    ca_parent_response_wrong_xml: '添加父级CA时收到数据库应答',
    ca_child_duplicate: "您已有名为'{child}'的子CA",
    ca_child_unknown: "您没有名为'{child}'的子CA",
    ca_child_resources_required:
      "您必须为名为'{child}'的子CA指定资源",
    ca_roa_unknown:
      "无法移除未知ROA '{prefix}-{max_length} => {asn}'",
    ca_roa_duplicate: "重复的ROA '{prefix}-{max_length} => {asn}'",
    ca_roa_invalid_max_length:
      "于ROA '{prefix}-{max_length} => {asn}'中的最大掩码长度无效",
    ca_roa_not_entitled:
      "ROA前缀：'{prefix}'未列于您的任一证书当中",
    ta_not_allowed:
      '该功能不提供给测试用信任锚',
    ta_name_reserved: '该名字被保留',
    ca_roa_delta_error: 'ROA因下列原因被拒绝',
    api_insufficient_rights:
      '当前用户无权限进行该操作。请联系您的超管。',
    api_invalid_credentials: '您提供的密钥错误。',
    api_login_error: '登录时出现错误：{cause}',
    api_auth_transient_error:
      '试图验证你的请求时出现（临时）错误。请重新尝试。',
    api_auth_permanent_error:
      '试图验证你的请求时出现错误。请联系您的超管。',
    api_auth_session_expired:
      '您的登录已过期。请重新登录⋯⋯',
    general_error: '出现错误。请联系您的超管。',
  },
  testbed: {
    welcome: '欢迎来到RPKI实验环境',
    disclaimer: {
      heading: '免责声明',
      body: "本实验环境提供完全独立的RPKI等级结构，以作为评估用途。它允许您为您的子CA注册任何IP或ASN资源。本服务的可用性不被担保。如果您遇到任何问题，<a href='https://github.com/NLnetLabs/krill/issues/new'>请告知我们</a>。",
    },
    rpconfighelp: {
      heading: '实验环境TAL',
      body: "如需验证发布至本实验环境的数据，请下载该<a href='{tallink}'>信任锚定位器</a> (TAL)并将其配置在您的依赖方软件中。请注意您绝不应在生产环境使用该TAL。这仅为测试提供。",
    },
    regunreg: {
      heading: '注册/注销',
      body: '<p>使用此表格将您的RPKI证书注册机构作为实验环境的子CA注册，以便您创建您声明已获取的资源的路由起源授权（ROA）。</p><p>若您无意托管Rsync及RRDP数据库，您可用注册发布者表格设置将您的ROA发布于由实验环境托管的数据库中。使用注销表格以中断此前建立的关系（亦针对其他实验环境的用户生效）。</p>',
    },
    rfcdoclink: '点此以阅读该XML相关的RFC-8183文档',
    childhandle: '子Handle',
    publisherhandle: '发布者Handle',
    responseXML: '实验环境应答XML',
    addChild: {
      heading: '注册CA',
      requestXML: {
        label: '子CA申请XML',
        placeholder: '复制您的<child_request/> XML到此处',
      },
      asnresources: {
        label: 'ASN资源',
        placeholder: 'AS资源：如AS1, AS3-4',
      },
      ipv4resources: {
        label: 'IPv4资源',
        placeholder: 'IPv4资源：如192.168.0.0/16',
      },
      ipv6resources: {
        label: 'IPv6资源',
        placeholder: 'IPv6资源：如2001:db8::/32',
      },
      confirm: '注册子CA',
      format: '此为无效的子CA申请XML',
      required: '请提供子CA申请的XML',
      confirmation: {
        title: '警告',
        message:
          '您确认在实验环境注册该CA吗？',
      },
      success: "子CA：'{child_handle}'已被添加至实验环境。",
      registeranother: '注册另一CA',
    },
    removeChild: {
      heading: '注销CA',
      placeholder: '输入CA名字以移除',
      confirm: '移除子CA',
      confirmation: {
        title: '警告',
        message:
          '您确定从实验环境移除此子CA吗？',
      },
      success: "子CA：'{child_handle}'已被添加到实验环境。",
    },
    addPublisher: {
      heading: '发布者注册',
      requestXML: {
        label: '发布者申请XML',
        placeholder: '复制您的<publisher_request/> XML到这里',
      },
      confirm: '发布者注册',
      format: '这不是有效的发布者申请XML',
      required: '请提供发布者申请XML',
      confirmation: {
        title: '警告',
        message:
          '确定在实验环境中注册该发布者吗？',
      },
      success: "发布者：'{publisher_handle}'已被添加到实验环境。",
      registeranother: '注册另一发布者',
    },
    removePublisher: {
      heading: '注销发布者',
      placeholder: '输入发布者名称以移除',
      confirm: '移除发布者',
      confirmation: {
        title: '警告',
        message:
          '您确认取消该发布者在实验环境的注册吗？',
      },
      success:
        "发布者：'{publisher_handle}'已从实验环境移除。",
    },
    errors: {
      invalid_xml: '无效的XML: {err}',
      missing_xml_el: '缺少{el}元素',
      missing_xml_child_el: '{parent}元素的缺少{el}子元素',
      missing_xml_attr: '{el}元素上缺少属性{attr}',
      empty_xml_el: '{el}元素不得为空',
      empty_xml_attr: '{el}元素上的{attr}属性不得为空',
      non_ascii_xml_el: '{el}元素不得包含非ASCII符号',
      child_handle_required: '子Handle为必填项',
      publisher_handle_required: '发布者Handle为必填项',
      non_base64_certificate_xml_el:
        '{el}元素必须正确包含由Base64编码的自签名X.509 BPKI证书',
      invalid_registration_data:
        '您的注册信息无法被正确解析',
    },
  },
};
