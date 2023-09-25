import { Translations } from '../core/translations';

export const translations: Translations = {
  'common': {
    'readthedocs': 'Ler documentos (inglês)',
    'report': 'Reportar um problema',
    'confirm': 'Confirmar',
    'cancel': 'Cancelar',
    'ok': 'OK',
    'error': 'Erro',
    'success': 'Successo!',
    'copy': 'Copiar para a Área de transferência',
    'download': 'Download',
    'dropOrClick': 'Arraste o arquivo aqui, ou <em>clique para upload</em>',
    'started': 'Krill rodando desde',
    'newversion': 'Nova versão disponível!',
    'supportcontracts': 'Contratos de Suporte',
    'warning': 'Aviso',
    'idle': 'Sua sessão expirou por inatividade.',
    'nodata': 'No data',
    'copySuccess': 'XML copiado para a Área de transferência',
    'edit': 'Editar',
    'page': 'page',
    'userInfo': {
      'title': 'Detalhes de autenticação',
      'user': 'Usuário'
    }
  },
  'login': {
    'password': 'Senha',
    'placeholder': 'Sua senha (token de autenticação)',
    'signin': 'Entrar',
    'required': 'Por favor, digite a sua senha',
    'error': 'A senha digitada é inválida/incorreta',
    'copied': 'Você não deve utilizar senhas de <a href=\'https://xkcd.com/936/\' target=\'_blank\'>https://xkcd.com/936/</a>',
    'id': 'Nome de usuário',
    'idPlaceholder': 'Seu nome de usuário',
    'idRequired': 'Por favor, informe seu nome de usuário',
    'retry': 'Clique {0} para retornar para a página de autenticação.',
    'here': 'aqui'
  },
  'onboarding': {
    'welcome': 'Bem-vindo ao Krill',
    'welcomeHtml': 'O primeiro passo é criar uma Autoridade Certificadora (CA) RPKI. Ela será usada para configurar o RPKI delegado com uma ou mais CAs-pai, geralmente uma Autoridade Nacional de Internet (NIR) ou mesmo uma Autoridade Regional de Internet (RIR).<br/><br/>Você deve definir um identificador que vinculará sua CA nas operações com a CA-pai e CAs-filhas. Este identificador não será usado nas publicações RPKI. Por favor, defina um identificador que ajude outras pessoas a identificar sua empresa/organização. Uma vez configurado, este identificador não poderá ser alterado.',
    'addCAForm': {
      'required': 'Este campo é obrigatório',
      'format': 'Este não é um nome de CA válido',
      'confirm': 'Criar CA',
      'confirmation': {
        'title': 'Aviso',
        'message': 'Uma vez configurado, este identificador não poderá ser alterado. Deseja continuar?'
      }
    }
  },
  'cas': {
    'loading': 'Carregando Autoridades Certificadoras (CAs)',
    'ca': 'Autoridade Certificadora (CA)',
    'cas': 'Autoridades Certificadoras (CAs)',
    'search': 'Buscando CAs...',
    'noCas': 'Não existe nenhuma Autoridade Certificadora (CA) definida.'
  },
  'caDetails': {
    'loading': 'Carregando {handle}',
    'refresh': 'Atualizando {handle}, isso pode demorar uns minutos',
    'current': 'Autoridade Certificadora atual',
    'download': 'Download do arquivo PEM',
    'noRoas': 'Nenhuma ROAs encontrada.',
    'noResources': 'Você não recebeu nenhum recurso ainda',
    'noChildren': 'Nenhum filho encontrado.',
    'addRoa': 'Adicionar ROA',
    'roas': 'ROAs',
    'resources': 'Recursos',
    'parents': 'CAs-pai',
    'repo': 'Repositório',
    'type': 'Tipo',
    'properties': 'Propriedades',
    'property': 'Propriedade',
    'value': 'Valor',
    'kind': 'Tipo',
    'resource': 'Recurso',
    'children': 'Filhos',
    'handle': 'Identificador',
    'comment': 'Commentário',
    'maxLength': 'Comprimento máximo',
    'maxLengthTooltip': 'Se o comprimento máximo não está especificado, o comprimento do prefixo será utilizado',
    'confirmation': {
      'title': 'Aviso',
      'message': 'Esta operação irá remover a ROA \'{prefix}-{max_length} => {asn}\'. Continuar?',
      'added': 'ROA adicionada',
      'retired': 'ROA removida',
      'retiredSuccess': 'A ROA foi removida',
      'addedSuccess': 'A ROA foi adicionada',
      'commentUpdatedSuccess': 'Commentário foi atualizado',
    },
    'addROAForm': {
      'required': 'Este campo é obrigatório',
      'asn_format': 'Este não é um ASN válido',
      'prefix_format': 'Por favor, entre um prefixo IPv4 ou IPv6 válido'
    },
    'onboardingWarning': 'Você deve conectar sua Autoridade Certificadora (CA) a um repositório RPKI público, onde será possível publicar seu certificado e ROAs. Assim que a configuração com a CA-pai for finalizada, imediatamente os softwares de validação (\'relying parties\') terão acesso aos certificado(s) e ROA(s) criados neste repositório.',
    'initializeRepository': 'Você ainda deve conectar sua Autoridade Certificadora (CA) a um repositório RPKI público.',
    'initialize': 'Por favor, initialize o repositório RPKI e/ou Pai primeiro.',
    'noResourcesYet': 'Você ainda não recebeu nenhum recurso',
    'clickToRefresh': 'Clique aqui para atualizar',
    'parentsTab': {
      'request': 'Requisição da CA-filha',
      'response': 'Resposta da CA-pai',
      'addParent': 'Incluir uma nova CA-pai',
      'addParentSuccess': 'CA-pai adicionada',
      'name': 'Nome da CA-pai',
      'namerequired': 'O nome da CA-pai é obrigatório',
      'nameformat': 'Este não é um nome de CA-pai válido'
    },
    'repoTab': {
      'request': 'Requisição do Publicador',
      'response': 'Resposta do Repositório',
      'addRepo': 'Incluir um repositório',
      'addRepoSuccess': 'Repositório adicionado'
    },
    'analyseThis': 'Analisar minhas ROAs',
    'analysis': 'Análise de ROA',
    'suggestions': {
      'following': 'Por favor, consulte as seguintes alterações sugeridas para suas ROAs.',
      'readMore': 'Saiba mais (texto em inglês)...',
      'nochanges': 'Não sugerimos alterações neste momento',
      'adding': 'Adicionando',
      'removing': 'Removendo ROA',
      'keep': 'Mantenha tudo como está.',
      'willResult': 'Resultará em',
      'yourChoice': 'Sua escolha',
      'ourSuggestion': 'Nossa sugestão',
      'ourSuggestionHelp': 'Nossa sugestão é baseada em informações de roteamento do RIPE RIS, favor verificar!',
      'addThis': 'Adicionar este',
      'removeThis': 'Remover este',
      'willAdd': 'Adicionará esta ROA',
      'willRemove': 'Removerá esta ROA',
      'reasons': {
        'not_found': 'Não encontrado',
        'not_held': 'O prefixo não existe mais em seu(s) certificado(s), a ROA não será publicada',
        'invalid_asn': 'ASN inválido',
        'invalid_length': 'Comprimento inválido',
        'stale': 'Velho',
        'disallowing': 'ROA desautoriza anúncios, e não autoriza nada. Usar AS0 como alternativa?',
        'as0_redundant': 'AS0 redundante',
        'redundant': 'Redundante',
        'too_permissive': 'Muito permissivo',
        'specific': 'Permitir anúncio específico em uma ROA que pode ser muito permissiva',
        'new': 'Novo'
      }
    },
    'syncParents': 'Atualizar Parents',
    'syncRepo': 'Atualizar Repositório',
    'lastExchange': 'Última troca',
    'exchangeUri': 'URI',
    'nextExchange': 'Próxima troca antes',
    'allResources': 'Todos os recursos',
    'entitlements': 'Permissões',
    'showEntitlements': 'Mostrar Permissões Detalhadas',
    'parentCertificate': 'Certificado Pai',
    'published': 'Publicado'
  },
  'announcements': {
    'noRoasOrAnnouncements': 'ROAs ou Anúncios não encontrados.',
    'search': 'Pesquisar por ASN, prefixos, estados...',
    'authorizes': 'Autoriza {number} anúncio(s)',
    'disallows': 'Desabilita {number} anúncio(s)',
    'asn': 'ASN',
    'prefix': 'Prefixo',
    'stateLabel': 'Estado',
    'state': {
      'roa_seen': 'VISTO',
      'roa_seen_help': 'Esta ROA corresponde a anúncios vistos no BGP',
      'roa_unseen': 'NÃO VISTO',
      'roa_unseen_help': 'Não identificamos nenhum anúncio BGP que corresponda a esta ROA',
      'roa_not_held': 'PREFIXO REMOVIDO',
      'roa_not_held_help': 'O prefixo não existe mais em seu(s) certificado(s), a ROA não será publicada',
      'roa_no_announcement_info': 'SEM INFORMAÇÕES DE ANÚNCIO',
      'roa_too_permissive': 'MUITO PERMISSIVO',
      'roa_too_permissive_help': 'Esta ROA corresponde a anúncios visto no BGP, mas também permite anúncios não vistos',
      'roa_disallowing': 'DESAUTORIZANDO',
      'roa_disallowing_help': 'Esta ROA só desautoriza anúncios. Caso isso seja intencional, talvez você prefira usar um AS0 como alternativa.',
      'roa_redundant': 'REDUNDANTE',
      'roa_redundant_help': 'Esta ROA é redundante, porque já existe uma ou mais ROAs cobrindo este prefixo, comprimento e ASN',
      'roa_as0': 'AS0',
      'roa_as0_help': 'Esta ROA tem por objetivo NÃO permitir anúncios para um prefixo',
      'roa_as0_redundant': 'REDUNDANTE',
      'roa_as0_redundant_help': 'Esta ROA AS0 é redundante porque já existe uma ou mais ROAs cobrindo este prefixo',
      'announcement_not_found': 'NÃO ENCONTRADO',
      'announcement_invalid_length': 'COMPRIMENTO INVÁLIDO',
      'announcement_invalid_asn': 'ASN INVÁLIDO',
      'announcement_not_found_help': 'Este anúncio não está coberto por nenhuma de suas ROAs',
      'announcement_invalid_length_help': 'Este anúncio não é permitido porque é mais específico do que o prefixo e comprimento máximo autorizado para este ASN',
      'announcement_invalid_asn_help': 'Este anúncio não é permitido, porque você já autorizou o prefixo a partir de outro ASN',
      'announcement_disallowed': 'DISALLOWED BY AS0',
      'announcement_disallowed_help':
        'This announcement is not allowed because you have an AS0 ROA that disallows it',
    },
    'download': 'Download CSV'
  },
  'deltaErrors': {
    'duplicates': 'Duplicados',
    'covered': 'Coberto',
    'notheld': 'Não é seu prefixo',
    'unknowns': 'Desconhecidos',
    'invalid_length': 'Comprimento inválido',
    'covering': 'Cobrindo',
    'as0_exists': 'AS0 Existe',
    'as0_overlaps': 'Sobreposição com AS0'
  },
  'errors': {
    'repo_not_set': 'Você deve configurar um repositório primeiro',
    'pub_unknown': 'Publicador \'{publisher}\' desconhecido',
    'pub_duplicate': 'Publicador \'{publisher}\' já inicializado',
    'pub_outside_jail': 'URI do publicador \'{uri}\' não pertence à URI do repositório \'{sia_base}\'',
    'pub_uri_no_slash': 'URI do publicador \'{uri}\' deve ser finalizado com um caracter \'/\'',
    'pub_no_embedded_repo': 'Nenhum repositório embarcado configurado',
    'ca_duplicate': 'CA \'{ca}\' já inicializada',
    'ca_unknown': 'CA \'{ca}\' desconhecida',
    'ca_repo_same': 'Este repositório já está em uso',
    'ca_repo_issue': 'Erro recebido do repositório: {cause}',
    'ca_repo_response_invalid_xml': 'Recebido um XML repository_response inválido',
    'ca_repo_response_wrong_xml': 'Recebido um XML parent_response ao invés de repository_response',
    'ca_parent_duplicate': 'Você já possui uma CA-pai chamada \'{parent}\'',
    'ca_parent_xml_duplicate': 'Esta resposta já é usado por uma CA-pai chamada \'{parent}\'',
    'ca_parent_unknown': 'Você não tem uma CA-pai chamada \'{parent}\'',
    'ca_parent_issue': 'Erro recebido da CA-pai \'{parent}\': {cause}',
    'ca_parent_response_invalid_xml': 'Xml parent_response inválido',
    'ca_parent_response_wrong_xml': 'Resposta do repositório após adicionar a CA-pai',
    'ca_child_duplicate': 'Você já possui uma CA-filha chamada \'{child}\'',
    'ca_child_unknown': 'Você não tem uma CA-filha chamada \'{child}\'',
    'ca_child_resources_required': 'Você deve especificar recursos para sua CA-filha \'{child}\'',
    'ca_roa_unknown': 'Impossível remover ROA desconhecida \'{prefix}-{max_length} => {asn}\'',
    'ca_roa_duplicate': 'ROA duplicada \'{prefix}-{max_length} => {asn}\'',
    'ca_roa_invalid_max_length': 'Comprimento máximo inválido na ROA \'{prefix}-{max_length} => {asn}\'',
    'ca_roa_not_entitled': 'Prefixo da ROA \'{prefix}\' não pertence a nenhum de seus certificados atuais',
    'ta_not_allowed': 'Esta funcionalidade não é suportada pelo Trust Anchor de testes',
    'ta_name_reserved': 'Nome reservado',
    'ca_roa_delta_error': 'ROA rejeitada pelos seguintes motivos:',
    'api_insufficient_rights': 'Seu usuário não possui privilégios suficientes para esta operação. Por favor, entre em contato com seu administrador.',
    'api_invalid_credentials': 'As credenciais fornecidas estão incorretas.',
    'api_login_error': 'Um erro ocorreu durante a autenticação: {cause}',
    'api_auth_transient_error': 'Um erro (temporário) ocorreu na tentativa de autenticação. Por favor, tente mais tarde.',
    'api_auth_permanent_error': 'Um erro ocorreu na tentativa de autenticação. Por favor, entre em contato com seu administrador.',
    'api_auth_session_expired': 'Sua sessão expirou. Por favor, autentique-se novamente.',
    'general_error': 'Ocorreu um erro. Por favor, entre em contato com seu administrador.'
  },
  'testbed': {
    'welcome': 'Bem-vindo ao ambiente de testes RPKI',
    'disclaimer': {
      'heading': 'Aviso legal',
      'body': 'Este ambiente de testes utiliza um hierarquia RPKI completamente independente, que pode ser utilizada para fins de avaliação. Ele permite que você registre qualquer recurso para sua CA-filha. Nenhuma garantia é dada em relação a disponibilidade deste serviço. Se você encontrar algum problema, <a href=\'https://github.com/NLnetLabs/krill/issues/new\'>favor nos informar</a>.'
    },
    'rpconfighelp': {
      'heading': 'TAL do ambiente de testes',
      'body': 'Para obter dados publicados por este ambiente de testes, favor baixar este <a href=\'{tallink}\'>Trust Anchor Locator</a> (TAL) e configurá-lo em seu software de validação (\'relying party\'). Note que você NUNCA deve usar este TAL num ambiente de produção. Ele é fornecido apenas para testes.'
    },
    'regunreg': {
      'heading': 'Registrar/Remover',
      'body': '<p>Use o formulário para registrar sua CA-filha de RPKI neste ambiente de testes para poder criar Route Origin Authorisations (ROAs) para seus recursos.</p><p>Se você não pretende hospedar seu próprio repositório Rsync e RRDP você pode usar o formulário \'Registrar Publicador\' para configurar a publicação de seus ROAs no repositório hospedado neste ambiente de testes. Use o formulário \'Remover\' para cancelar relações estabelecidas anteriormente (inclusive aquela de outros usuários deste ambiente de testes!).</p>'
    },
    'rfcdoclink': 'Clique para ver a documentação da RFC-8183 para este XML',
    'childhandle': 'Identificador da CA-filha',
    'publisherhandle': 'Identificador do Publicador',
    'responseXML': 'Resposta XML do ambiente de testes',
    'addChild': {
      'heading': 'Registrar CA',
      'requestXML': {
        'label': 'XML Child Request',
        'placeholder': 'Cole aqui seu XML <child_request/>'
      },
      'asnresources': {
        'label': 'ASNs',
        'placeholder': 'ASNs: p. ex. AS1, AS3-4'
      },
      'ipv4resources': {
        'label': 'Recursos IPv4',
        'placeholder': 'Recursos IPv4: p. ex. 192.168.0.0/16'
      },
      'ipv6resources': {
        'label': 'Recursos IPv6',
        'placeholder': 'Recursos IPv6: p. ex. 2001:db8::/32'
      },
      'confirm': 'Registrar CA-filha',
      'format': 'Este não é um XML <child_request/> válido',
      'required': 'Favor informar um XML <child_request/>',
      'confirmation': {
        'title': 'Atenção',
        'message': 'Você tem certeza que quer registrar esta CA-filha neste ambiente de testes?'
      },
      'success': 'CA-filha \'{child_handle}\' adicionado ao ambiente de testes.',
      'registeranother': 'Registrar outra CA'
    },
    'removeChild': {
      'heading': 'Remover CA',
      'placeholder': 'Informe o nome da CA a ser removida',
      'confirm': 'Remover CA-filha',
      'confirmation': {
        'title': 'Atenção',
        'message': 'Você tem certeza que quer remover esta CA-filha deste ambiente de testes?'
      },
      'success': 'CA-filha \'{child_handle}\' foi removido deste ambiente de testes.'
    },
    'addPublisher': {
      'heading': 'Registrar Publicador',
      'requestXML': {
        'label': 'XML Publisher Request',
        'placeholder': 'Cole aqui seu XML <publisher_request/>'
      },
      'confirm': 'Registrar publicador',
      'format': 'Este não é um XML <publisher_request/> válido',
      'required': 'Favor informar um XML <publisher_request/>',
      'confirmation': {
        'title': 'Atenção',
        'message': 'Você tem certeza que quer registrar este publicador neste ambiente de testes?'
      },
      'success': 'Publicador \'{publisher_handle}\' adicionado ao ambiente de testes.',
      'registeranother': 'Registrar outro Publicador'
    },
    'removePublisher': {
      'heading': 'Remover Publicador',
      'placeholder': 'Informe o nome do Publicador a ser removido',
      'confirm': 'Remover publicador',
      'confirmation': {
        'title': 'Atenção',
        'message': 'Você tem certeza que quer remover este publicador deste ambiente de testes?'
      },
      'success': 'Publicador \'{publisher_handle}\' foi removido deste ambiente de testes.'
    },
    'errors': {
      'invalid_xml': 'XML inválido: {err}',
      'missing_xml_el': 'Elemento {el} ausente',
      'missing_xml_child_el': 'Elemento filho {el} ausente do elemento {parent}',
      'missing_xml_attr': 'Atributo {attr} ausente no elemento {el}',
      'empty_xml_el': 'Elemento {el} não pode ser vazio',
      'empty_xml_attr': 'Atributo {attr} do elemento {el} não pode ser vazio',
      'non_ascii_xml_el': 'Elemento {el} não pode incluir caracteres não-ASCII',
      'child_handle_required': 'Identificador da CA-filha é obrigatório',
      'publisher_handle_required': 'Identificador do Publicador é obrigatório',
      'non_base64_certificate_xml_el': 'Elemento {el} deve conter um certificado X.509 BPKI auto-assinado, no formato Base64',
      'invalid_registration_data': 'As informações em sua solicitação de registro não puderam ser interpretadas corretamente'
    }
  }
};
