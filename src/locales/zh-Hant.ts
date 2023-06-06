import { Translations } from '../core/translations';

export const translations: Translations = {
  common: {
    readthedocs: '閱讀文檔',
    report: '反饋問題',
    confirm: '確認',
    cancel: '取消',
    ok: 'OK',
    error: '錯誤',
    success: '成功!',
    copy: '複製到剪貼板',
    download: '下載',
    dropOrClick: '拖拽文件至此處或<em>點此上載</em>',
    started: 'Krill初始運行時間為',
    newversion: '有版本更新！',
    supportcontracts: '服務合約',
    warning: '警告',
    idle: '您因無活動而被登出。',
    nodata: '無數據',
    copySuccess: 'XML已複製到剪貼板',
    edit: '編輯',
    page: '頁面',
    userInfo: {
      title: '登錄數據',
      user: '用戶',
    },
  },
  login: {
    password: '密碼',
    placeholder: '您的密碼',
    signin: '登錄',
    required: '請輸入您的密碼',
    error: '您鍵入的密碼有誤',
    copied:
      "請勿使用自<a href='https://xkcd.com/936/' target='_blank'>https://xkcd.com/936/</a>取得的密碼",
    id: '用戶名',
    idPlaceholder: '您的用戶名',
    idRequired: '請輸入您的用戶名',
    retry: '點擊{0}返回登錄界面。',
    here: '這裡',
  },
  onboarding: {
    welcome: '歡迎來到Krill',
    welcomeHtml:
      "讓我們從創建您的RPKI證書頒發機構（CA）開始。它將被用來配置通常為一或多個區域或國家互聯網註冊管理機構父級CA下發的RPKI。 <br><br>您選擇的handle會被用來在與父級或子級CA交互過程中識別您的CA。它將不會在RPKI中發布。請選擇能讓他人識別出您機構的handle。設置後handle將無法更改。",
    addCAForm: {
      required: '此為必填項',
      format: '這不是有效的CA名稱',
      confirm: '創建CA',
      confirmation: {
        title: '警告',
        message: '設置後handle將無法更改。是否繼續？',
      },
    },
  },
  cas: {
    loading: '加載證書頒發機構中',
    ca: '證書頒發機構',
    cas: '證書頒發機構',
    search: '搜索CAs⋯⋯',
    noCas: '當前沒有已被界定的證書頒發機構。',
  },
  caDetails: {
    loading: '加載{handle}中',
    refresh: '刷新{handle}中，可能需要略作等待',
    current: '當前證書頒發機構',
    download: '下載PEM',
    noRoas: '未找到ROA。',
    noResources: '您暫為獲得任何資源',
    noChildren: '未發現子CA',
    addRoa: '添加ROA',
    roas: 'ROA',
    resources: '資源',
    parents: '父級CA',
    repo: '數據庫',
    type: '類型',
    properties: '特性',
    property: '特性',
    value: '數值',
    kind: '類別',
    resource: '資源',
    children: '子項',
    handle: 'Handle',
    comment: '備註',
    maxLength: '最大長度',
    maxLengthTooltip:
      '若不指定最大長度，該長度默認為地址前綴的掩碼長度。',
    confirmation: {
      title: '警告',
      message:
        "此舉將會移除ROA '{prefix}-{max_length} => {asn}'。是否繼續？",
      added: '已添加ROA',
      retired: '已移除ROA',
      retiredSuccess: '該ROA已被移除',
      addedSuccess: '該ROA已被添加',
      commentUpdatedSuccess: '該ROA的備註已更新',
    },
    addROAForm: {
      required: '該項為必填項',
      asn_format: '這不是有效的ASN',
      prefix_format: '請輸入有效的IPv4或IPv6前綴',
    },
    onboardingWarning:
      '您需要將您的CA與可發布您的證書及ROA的公共RPKI數據庫相連結。當父級CA配置完成時，關聯的受信任軟件將立即開始下載您於此數據庫創建的證書及ROA。',
    initializeRepository:
      '在您的CA向父級CA申請資源證書前您仍須為它設置一个數據庫',
    initialize:
      '請先初始化RPKI數據庫及/或父級CA。',
    noResourcesYet: '您暫未獲得任何資源',
    clickToRefresh: '點此刷新',
    parentsTab: {
      request: '子CA請求',
      response: '父級CA應答',
      addParent: '添加額外的父級CA',
      addParentSuccess: '父級CA已添加',
      name: '父級CA名稱',
      namerequired: '父級CA名稱為必填項',
      nameformat: '該父級CA名稱無效',
    },
    repoTab: {
      request: '發布者申請',
      addRepo: '添加數據庫',
      response: '數據庫應答',
      addRepoSuccess: '數據庫已添加',
    },
    analyseThis: '分析我的ROA',
    analysis: 'ROA分析',
    suggestions: {
      following: '請確認以下關於您ROA的建議更新。',
      readMore: '閱讀更多⋯⋯',
      nochanges: '當前無變更建議',
      adding: '添加中',
      removing: 'ROA移除中',
      keep: '請依原樣保留。',
      willResult: '將會導致',
      yourChoice: '您的選擇',
      ourSuggestion: '我們的建議',
      ourSuggestionHelp:
        '我們的建議是建立在RIPE RIS路由信息上的，請確認！',
      addThis: '添加該',
      removeThis: '移除該',
      willAdd: '將會添加該ROA',
      willRemove: '將會移除移除該ROA',
      reasons: {
        not_found: '允許未被您ROA涵蓋的路由宣告',
        not_held:
          'ROA無法發布，您的證書不再包含相關的地址前綴',
        invalid_asn: '允許來自新的ASN的路由宣告',
        invalid_length: '允許該ASN相關更詳細前綴的路由宣告',
        stale: '未發現與ROA相關的宣告',
        disallowing:
          '該ROA僅能禁止路由宣告。若這是您的訴求，我們推荐創建AS0的ROA。',
        as0_redundant: 'ROA冗余',
        redundant: 'ROA冗余',
        too_permissive:
          'ROA允許額外的路由宣告，這可能被路径欺詐攻擊濫用',
        specific:
          '在ROA中允許可能過於寬容的詳細路由宣告',
        new: '新',
      },
    },
    syncParents: '更新父級CA',
    syncRepo: '更新數據庫',
    lastExchange: '最近交換',
    exchangeUri: 'URI',
    nextExchange: '下次交換前',
    allResources: '所有資源',
    entitlements: '授權機制',
    showEntitlements: '顯示授權機制詳情',
    parentCertificate: '父級證書',
    published: '已發布',
  },
  announcements: {
    noRoasOrAnnouncements: '未發現ROA或路由宣告。',
    search: '搜索ASN，地址前綴，狀態中⋯⋯',
    authorizes: '授權了{number}個路由宣告',
    disallows: '禁止了{number}個路由宣告',
    asn: 'ASN',
    prefix: '前綴',
    stateLabel: '狀態',
    state: {
      roa_seen: '可見',
      roa_seen_help: '該ROA符合BGP中可見的路由宣告',
      roa_unseen: '不可見',
      roa_unseen_help: '未找到符合該ROA的BGP路由宣告',
      roa_not_held: '前綴已移除',
      roa_not_held_help:
        '該前綴已不在您的證書上，這条ROA將不會被發布',
      roa_no_announcement_info: '無路由宣告信息',
      roa_too_permissive: '過於寬容',
      roa_too_permissive_help:
        '該ROA符合BGP中的路由宣告，但同時也允許不可見的路由宣告',
      roa_disallowing: '禁止中',
      roa_disallowing_help:
        '該ROA僅能禁止路由宣告。若這是您的訴求，推荐創建AS0的ROA。',
      roa_redundant: '冗余',
      roa_redundant_help:
        '由於存在一或多个該前綴，掩碼及ASN相關的ROA，該ROA是多餘的',
      roa_as0: 'AS0',
      roa_as0_help:
        '通过該ROA可禁止某一前綴的所有路由宣告',
      roa_as0_redundant: '冗余',
      roa_as0_redundant_help:
        '由於存在一或多个該前綴相關的ROA，因此該AS0 ROA是多餘的',
      announcement_not_found: '未找到',
      announcement_not_found_help:
        '該路由宣告未被您的ROA保護',
      announcement_invalid_length: '無效掩碼',
      announcement_invalid_length_help:
        '該路由宣告因前綴及其最大長度比您给予該ASN的授權更大而不被允許',
      announcement_invalid_asn: '無效ASN',
      announcement_invalid_asn_help:
        '該路由宣告因您僅將該前綴授權给另一ASN而不被允許',
    },
    download: '下載CSV',
  },
  deltaErrors: {
    duplicates: '已存在該ROA',
    covered: '存在被覆蓋的ROA',
    notheld: '不是您的前綴',
    unknowns: '未知',
    invalid_length: '無效掩碼長度',
    covering: '正在覆蓋現有的ROA',
    as0_exists: '存在AS0',
    as0_overlaps: '存在被覆蓋的ROA',
  },
  errors: {
    repo_not_set: '您必須先設置數據庫',
    pub_unknown: "未知發布者：'{publisher}'",
    pub_duplicate: "發布者：'{publisher}'已被初始化",
    pub_outside_jail:
      "發布者uri：'{uri}'不在數據庫uri：'{sia_base}'中",
    pub_uri_no_slash: "發布者uri '{uri}'必須以右斜槓結尾",
    pub_no_embedded_repo: '無已配置的內置數據庫',
    ca_duplicate: "名為'{ca}'的CA已被初始化",
    ca_unknown: "未知CA：'{ca}'",
    ca_repo_same: '該數據庫正在使用中',
    ca_repo_issue: '从數據庫收到錯誤: {cause}',
    ca_repo_response_invalid_xml: '返回無效數據庫應答xml',
    ca_repo_response_wrong_xml: '收到父級CA應答而非數據庫應答',
    ca_parent_duplicate: "名為'{parent}'的父級CA已存在",
    ca_parent_xml_duplicate:
      "該响应已被名為'{parent}'的父級CA使用",
    ca_parent_unknown: "您没有名為'{parent}'的父級CA",
    ca_parent_issue: "从父級CA '{parent}'收到錯誤: {cause}",
    ca_parent_response_invalid_xml: '收到無效的父級CA應答xml',
    ca_parent_response_wrong_xml: '添加父級CA時收到數據庫應答',
    ca_child_duplicate: "您已有名為'{child}'的子CA",
    ca_child_unknown: "您没有名為'{child}'的子CA",
    ca_child_resources_required:
      "您必須為名為'{child}'的子CA指定資源",
    ca_roa_unknown:
      "無法移除未知ROA '{prefix}-{max_length} => {asn}'",
    ca_roa_duplicate: "重複的ROA '{prefix}-{max_length} => {asn}'",
    ca_roa_invalid_max_length:
      "于ROA '{prefix}-{max_length} => {asn}'中的最大掩碼長度無效",
    ca_roa_not_entitled:
      "ROA前綴：'{prefix}'未列于您的任一證書當中",
    ta_not_allowed:
      '該功能不提供给測試用信任錨',
    ta_name_reserved: '該名字被預留',
    ca_roa_delta_error: 'ROA因下列原因被拒絕',
    api_insufficient_rights:
      '當前用戶無权限进行該操作。請聯繫您的超管。',
    api_invalid_credentials: '您提供的密鑰錯誤。',
    api_login_error: '登錄時出現錯誤：{cause}',
    api_auth_transient_error:
      '試圖驗證你的請求時出現（临時）錯誤。請重新尝试。',
    api_auth_permanent_error:
      '試圖驗證你的請求時出現錯誤。請聯繫您的超管。',
    api_auth_session_expired:
      '您的登錄已過期。請重新登錄⋯⋯',
    general_error: '出現錯誤。請聯繫您的超管。',
  },
  testbed: {
    welcome: '歡迎來到RPKI實驗環境',
    disclaimer: {
      heading: '免責聲明',
      body: "本實驗環境提供完全獨立的RPKI等級結構，以作為評估用途。它允許您為您的子CA註冊任何IP或ASN資源。本服務的可用性不被擔保。如果您遇到任何問題，<a href='https://github.com/NLnetLabs/krill/issues/new'>請告知我們</a>。",
    },
    rpconfighelp: {
      heading: '實驗環境TAL',
      body: "如需驗證發布至本實驗環境的數據，請下載該<a href='{tallink}'>信任錨定位器</a> (TAL)并將其配置在您的依赖方軟件中。請注意您絕不應在生產環境使用該TAL。因這僅為測試提供。",
    },
    regunreg: {
      heading: '註冊/註銷',
      body: '<p>使用此表格將您的RPKI證書註冊机构作為實驗環境的子CA註冊，以便您創建您聲明已獲取的資源的路由來源授權（ROA）。</p><p>若您無意託管Rsync及RRDP數據庫，您可用註冊發布者表格設置將您的ROA發布于由實驗環境託管的數據庫中。使用註銷表格以中斷此前建立的關係（亦針對其他實驗環境的用戶生效）。</p>',
    },
    rfcdoclink: '點此以閱讀該XML相關的RFC-8183文檔',
    childhandle: '子Handle',
    publisherhandle: '發布者Handle',
    responseXML: '實驗環境應答XML',
    addChild: {
      heading: '註冊CA',
      requestXML: {
        label: '子CA申請XML',
        placeholder: '複製您的<child_request/> XML到此處',
      },
      asnresources: {
        label: 'ASN資源',
        placeholder: 'AS資源：如AS1, AS3-4',
      },
      ipv4resources: {
        label: 'IPv4資源',
        placeholder: 'IPv4資源：如192.168.0.0/16',
      },
      ipv6resources: {
        label: 'IPv6資源',
        placeholder: 'IPv6資源：如2001:db8::/32',
      },
      confirm: '註冊子CA',
      format: '此為無效的子CA申請XML',
      required: '請提供子CA申請的XML',
      confirmation: {
        title: '警告',
        message:
          '您確認在實驗環境註冊該CA嗎？',
      },
      success: "子CA：'{child_handle}'已被添加至實驗環境。",
      registeranother: '註冊另一CA',
    },
    removeChild: {
      heading: '註銷CA',
      placeholder: '輸入CA名字以移除',
      confirm: '移除子CA',
      confirmation: {
        title: '警告',
        message:
          '您確定从實驗環境移除此子CA嗎？',
      },
      success: "子CA：'{child_handle}'已被添加到實驗環境。",
    },
    addPublisher: {
      heading: '發布者註冊',
      requestXML: {
        label: '發布者申請XML',
        placeholder: '複製您的<publisher_request/> XML到這里',
      },
      confirm: '發布者註冊',
      format: '這不是有效的發布者申請XML',
      required: '請提供發布者申請XML',
      confirmation: {
        title: '警告',
        message:
          '確定在實驗環境中註冊該發布者嗎？',
      },
      success: "發布者：'{publisher_handle}'已被添加到實驗環境。",
      registeranother: '註冊另一發布者',
    },
    removePublisher: {
      heading: '註銷發布者',
      placeholder: '輸入發布者名稱以移除',
      confirm: '移除發布者',
      confirmation: {
        title: '警告',
        message:
          '您確認取消該發布者在實驗環境的註冊嗎？',
      },
      success:
        "發布者：'{publisher_handle}'已从實驗環境移除。",
    },
    errors: {
      invalid_xml: '無效的XML: {err}',
      missing_xml_el: '缺少{el}元素',
      missing_xml_child_el: '{parent}元素的缺少{el}子元素',
      missing_xml_attr: '{el}元素上缺少屬性{attr}',
      empty_xml_el: '{el}元素不得為空',
      empty_xml_attr: '{el}元素上的{attr}屬性不得為空',
      non_ascii_xml_el: '{el}元素不得包含非ASCII符號',
      child_handle_required: '子Handle為必填項',
      publisher_handle_required: '發布者Handle為必填項',
      non_base64_certificate_xml_el:
        '{el}元素必須正確包含由Base64編碼的自簽名X.509 BPKI證書',
      invalid_registration_data:
        '您的註冊信息無法被正確解析',
    },
  },
};
