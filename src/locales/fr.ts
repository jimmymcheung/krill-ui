import { Translations } from '../core/translations';

export const translations: Translations = {
  'common': {
    'readthedocs': 'Read the Docs',
    'report': 'Signaler un problème',
    'confirm': 'Confirmer',
    'cancel': 'Annuler',
    'ok': 'OK',
    'error': 'Erreur',
    'success': 'Succès!',
    'copy': 'Copier dans le presse-papier',
    'download': 'Télécharger',
    'dropOrClick': 'Déposer le fichier ici ou <em>cliquer pour téléverser</em>',
    'started': 'Krill est en cours d\'exécution depuis',
    'newversion': 'Nouvelle version disponible!',
    'supportcontracts': 'Contrats de support et de maintenance',
    'warning': 'Attention',
    'idle': 'Vous avez été déconnecté de suite d\'inactivité.',
    'nodata': 'No data',
    'copySuccess': 'XML copié dans votre presse-papier',
    'edit': 'Edit',
    'page': 'page',
    'userInfo': {
      'title': 'Login Details',
      'user': 'User'
    }
  },
  'login': {
    'password': 'Mot de passe',
    'placeholder': 'Votre mot de passe',
    'signin': 'S\'authentifier',
    'required': 'SVP entrez votre mot de passe',
    'error': 'Le mot de passe spécifié est incorrect',
    'copied': 'Vous ne devriez pas obtenir votre mot de passe depuis <a href=\'https://xkcd.com/936/\' target=\'_blank\'>https://xkcd.com/936/</a>',
    'id': 'Nom d\'utilisateur',
    'idPlaceholder': 'Votre nom d\'utilisateur',
    'idRequired': 'Veuillez entrer votre nom d\'utilisateur',
    'retry': 'Cliquer {0} pour revenir à la page de connexion.',
    'here': 'ici'
  },
  'onboarding': {
    'welcome': 'Bienvenue sur Krill',
    'welcomeHtml': 'Commençons par créer votre propre Autorité de Certification RPKI (AC). Elle sera utilisée pour configurer la délégation RPKI avec une ou plusieurs ACs parent; le plus souvent votre Registre Internet Régional ou National.<br><br>L\'identifiant que vous choisirez sera utilisé pour identifier votre AC lors des interactions avec le parent et les ACs enfant. Il ne sera pas publié dans le système RPKI. S\'il vous plaît choisissez un identifiant qui permettra aux autres à reconnaître votre organisation. Une fois défini, votre identifiant ne pourra plus être changé.',
    'addCAForm': {
      'required': 'Ce champ est requis',
      'format': 'Ce n\'est pas un nom d\'AC valide',
      'confirm': 'Créez une AC',
      'confirmation': {
        'title': 'Attention',
        'message': 'Une fois défini, l\'identifiant ne pourra être changé. Continuer?'
      }
    }
  },
  'cas': {
    'loading': 'Chargement en cours des Autorités de Certification',
    'ca': 'Autorité de certification',
    'cas': 'Autorités de certification',
    'search': 'Recherche d\'ACs...',
    'noCas': 'Il n\'y a pas d\'Autorités de Certifications définies actuellement.'
  },
  'caDetails': {
    'loading': 'En cours de chargement {handle}',
    'refresh': 'Rafraichissement de {handle}, ceci peut prendre plusieurs minutes',
    'current': 'Autorité de Certification actuelle',
    'download': 'Télécharger le PEM',
    'noRoas': 'Pas de ROAs trouvé.',
    'noResources': 'Vous n\'avez pas encore reçu de ressources',
    'noChildren': 'Pas d\'enfant trouvé.',
    'addRoa': 'Ajouter un ROA',
    'roas': 'ROAs',
    'resources': 'Ressources',
    'parents': 'Parents',
    'repo': 'Dépôt',
    'type': 'Type',
    'properties': 'Propriétés',
    'property': 'Propriété',
    'value': 'Valeur',
    'kind': 'Genre',
    'resource': 'Ressource',
    'children': 'Enfant',
    'handle': 'Identifiant',
    'comment': 'Commentaire',
    'maxLength': 'Longueur maximum',
    'maxLengthTooltip': 'Si la longueur maximum n\'est pas spécifiée, elle sera initialisée à la longueur du préfixe.',
    'confirmation': {
      'title': 'Attention',
      'message': 'Cette action va enlever le ROA \'{prefix}-{max_length} => {asn}\'. Continuez?',
      'added': 'ROA ajouté',
      'retired': 'ROA enlevé',
      'retiredSuccess': 'Le ROA a été enlevé',
      'addedSuccess': 'Le ROA a été ajouté',
      'commentUpdatedSuccess': 'Le commentaire ROA a été mis à jour',
    },
    'addROAForm': {
      'required': 'Ce champ est requis',
      'asn_format': 'Ceci n\'est pas un ASN valide',
      'prefix_format': 'SVP entrez un préfixe IPv4 ou IPv6 valide'
    },
    'onboardingWarning': 'Veuillez connecter votre AC à un dépôt RPKI publique pour publier votre certificat et vos ROAs. Dès que la configuration côté parent est complète, le \'relying party\' (logiciel validateur) commencera immédiatement à récupérer votre certificat et les ROAs que vous avez créés depuis ce dépôt.',
    'initializeRepository': 'Vous devez toujours configurer un entrepôt pour votre AC avant de pouvoir demander un ou plusieurs certificats de ressources à votre parent.',
    'initialize': 'SVP initialisez le dépôt RPKI et/ou le parent en premier lieu.',
    'noResourcesYet': 'Vous n\'avez pas encore reçu de ressources',
    'clickToRefresh': 'Cliquer ici pour rafraîchir',
    'parentsTab': {
      'request': 'Requête enfant',
      'response': 'Réponse du parent',
      'addParent': 'Ajouter un autre parent',
      'addParentSuccess': 'Parent ajouté',
      'name': 'Nom du parent',
      'namerequired': 'Le nom du parent est requis',
      'nameformat': 'Nom de parent invalide'
    },
    'repoTab': {
      'request': 'Requête du Publisher',
      'response': 'Réponse du dépôt',
      'addRepo': 'Ajouter un dépôt',
      'addRepoSuccess': 'Dépôt ajouté'
    },
    'analyseThis': 'Analyser mes ROAs',
    'analysis': 'Analyse des ROA',
    'suggestions': {
      'following': 'Veuillez vérifier les changements proposés de vos ROAs',
      'readMore': 'Read more..',
      'nochanges': 'Nous ne suggérons aucun changement pour le moment',
      'adding': 'En cours d\'ajout',
      'removing': 'Retirer le ROA',
      'keep': 'Aucun changement',
      'willResult': 'Résultera en',
      'yourChoice': 'Votre choix',
      'ourSuggestion': 'Notre Suggestion',
      'ourSuggestionHelp': 'Notre suggestion est basée sur les informations de routage de RIPE RIS, veuillez svp vérifier !!',
      'addThis': 'Ajouter ceci',
      'removeThis': 'Retirer ceci',
      'willAdd': 'Ajoutera ce ROA',
      'willRemove': 'Retirera ce ROA',
      'reasons': {
        'not_found': 'Pas trouvé',
        'not_held': 'ROA cannot be published, its prefix is no longer on your certificate(s)',
        'invalid_asn': 'ASN invalide',
        'invalid_length': 'longueur invalide',
        'stale': 'Obsolète',
        'disallowing': 'Ce ROA invalide les annonces mais en autorise aucun. Considérez un AS0 à la place?',
        'as0_redundant': 'AS0 redondant',
        'redundant': 'Redondant',
        'too_permissive': 'Trop permissif',
        'specific': 'Autoriser une annonce spécifique dans un ROA qui pourrait être trop permissif',
        'new': 'Nouveau'
      }
    },
    'syncParents': 'Rafraîchir les Parents',
    'syncRepo': 'Rafraîchir le Dépôt',
    'lastExchange': 'Dernier Échange',
    'exchangeUri': 'URI',
    'nextExchange': 'Dernier Échange Avant',
    'allResources': 'Toutes les Ressources',
    'entitlements': 'Ressources Dues',
    'showEntitlements': 'Montrer les Ressources Dues en détail',
    'parentCertificate': 'Certificat Parent',
    'published': 'Publié'
  },
  'announcements': {
    'noRoasOrAnnouncements': 'Aucun ROAs ou Annonces trouvés.',
    'search': 'Rechercher un ASN, préfixe, statut...',
    'authorizes': 'Autoriser {number} annonces',
    'disallows': 'Refuser {number} annonces',
    'asn': 'ASN',
    'prefix': 'Préfixe',
    'stateLabel': 'Statut',
    'state': {
      'roa_seen': 'TROUVÉ',
      'roa_seen_help': 'Ce ROA correspond aux annonces vues dans BGP',
      'roa_unseen': 'INTROUVABLE',
      'roa_unseen_help': 'Aucune annonce BGP correspondant à ce ROA trouvée',
      'roa_not_held': 'PREFIX REMOVED',
      'roa_not_held_help': 'The prefix is no longer on your certificate(s), the ROA will not be published',
      'roa_no_announcement_info': 'AUCUNE INFORMATION D\'ANNONCE',
      'roa_too_permissive': 'TROP PERMISSIF',
      'roa_too_permissive_help': 'Ce ROA correspond aux annonces en BGP, mais aussi à des annonces introuvables',
      'roa_disallowing': 'INVALIDANT',
      'roa_disallowing_help': 'Ce ROA invalide les annonces seulement. Si c’est intentionnel, vous devriez plutôt utiliser un AS0 à la place',
      'roa_redundant': 'REDONDANT',
      'roa_redundant_help': 'Ce ROA est redondant parce qu’il y a au moins un ROA existant qui couvre ce préfixe, longueur et numéro d\'AS',
      'roa_as0': 'AS0',
      'roa_as0_help': 'Ce ROA sert à invalider toutes les annonces pour un préfixe',
      'roa_as0_redundant': 'REDONDANT',
      'roa_as0_redundant_help': 'Ce ROA AS0 est redondant parce qu’il y a au moins un ROA existant qui couvre ce préfixe',
      'announcement_not_found': 'NON TROUVÉ',
      'announcement_not_found_help': 'Cette announce n\'est couverte par aucun de vos ROAs',
      'announcement_invalid_length': 'LONGUEUR INVALIDE',
      'announcement_invalid_length_help': 'Cette annonce n\'est pas permise parce qu\'elle est plus spécifique que la longueur du préfixe et la taille maximum autorisées pour cet ASN',
      'announcement_invalid_asn': 'ASN INVALIDE',
      'announcement_invalid_asn_help': 'Cette annonce n\'est pas permise parce que vous autorisez seulement le préfixe depuis un autre ASN'
    },
    'download': 'Télécharger le fichier au format CSV'
  },
  'deltaErrors': {
    'duplicates': 'Doublons',
    'covered': 'Couvert',
    'notheld': 'Pas Considéré',
    'unknowns': 'Inconnus',
    'invalid_length': 'Longueur Invalide',
    'covering': 'Recouvrant',
    'as0_exists': 'AS0 Existe',
    'as0_overlaps': 'Chevauchement du AS0'
  },
  'errors': {
    'repo_not_set': 'Vous devez d\'abord configurer un dépôt',
    'pub_unknown': 'Publisher \'{publisher}\' est inconnu',
    'pub_duplicate': 'Publisher \'{publisher}\' était déjà initialisé',
    'pub_outside_jail': 'Publisher uri \'{uri}\' en dehors du dépôt uri \'{sia_base}\'',
    'pub_uri_no_slash': 'Publisher uri \'{uri}\' doit avoir une barre oblique à la fin',
    'pub_no_embedded_repo': 'Pas de dépôt imbriqué configuré',
    'ca_duplicate': 'AC \'{ca}\' déjà initialisée',
    'ca_unknown': 'AC \'{ca}\' est inconnue',
    'ca_repo_same': 'Ce dépôt est déjà utilisé',
    'ca_repo_issue': 'Erreur provenant du dépôt: {cause}',
    'ca_repo_response_invalid_xml': 'Réponse xml du dépôt invalide',
    'ca_repo_response_wrong_xml': 'Réponse du parent reçue au lieu du dépôt',
    'ca_parent_duplicate': 'Vous avez déjà un parent nommé \'{parent}\'',
    'ca_parent_xml_duplicate': 'Cette réponse est déjà utilisée par le parent \'{parent}\'',
    'ca_parent_unknown': 'Vous n\'avez pas un parent nommé \'{parent}\'',
    'ca_parent_issue': 'Erreur reçue du parent \'{parent}\': {cause}',
    'ca_parent_response_invalid_xml': 'Réponse xml du parent invalide',
    'ca_parent_response_wrong_xml': 'Réponse du dépôt obtenue lors de l\'ajout du parent',
    'ca_child_duplicate': 'Vous avez déjà une AC enfant nommée \'{child}\'',
    'ca_child_unknown': 'Vous n\'avez pas une AC enfant nommée \'{child}\'',
    'ca_child_resources_required': 'Vous devez spécifier les ressources pour l\'AC enfant \'{child}\'',
    'ca_roa_unknown': 'Impossible d\'enlever un ROA inconnu \'{prefix}-{max_length} => {asn}\'',
    'ca_roa_duplicate': 'ROA en doublon \'{prefix}-{max_length} => {asn}\'',
    'ca_roa_invalid_max_length': 'Longueur max invalide dans le ROA \'{prefix}-{max_length} => {asn}\'',
    'ca_roa_not_entitled': 'Le préfixe du ROA \'{prefix}\' ne figure dans aucun de vos certificats actuels',
    'ta_not_allowed': 'Cette fonctionnalité n\'est pas supportée par l\'ancre de confiance de test',
    'ta_name_reserved': 'Nom reservé',
    'ca_roa_delta_error': 'ROA rejeté pour la/les raison(s) suivante(s)',
    'api_insufficient_rights': 'Votre utilisateur n\'a pas les droits suffisants pour effectuer cette action.',
    'api_invalid_credentials': 'Les identifiants fournis sont invalides.',
    'api_login_error': 'Une erreur est survenue pendant votre connexion: {cause}',
    'api_auth_transient_error': 'Une erreur temporaire est survenue pendant votre connexion. Veuillez essayer à nouveau dans quelques instants',
    'api_auth_permanent_error': 'Une erreur est survenue pendant l\'authentification de votre connexion. Veuillez contacter votre administrateur.',
    'api_auth_session_expired': 'Votre session a expirée,',
    'general_error': 'Une erreur est survenue. Veuillez contacter votre administrateur.'
  },
  'testbed': {
    'welcome': 'Bienvenue sur ce banc d\'essai pour RPKI',
    'disclaimer': {
      'heading': 'Avertissement',
      'body': 'Ce banc d\'essai offre une hiérarchie complètement différente pour RPKI; il peut être utilisé pour des besoins d\'évaluation. Il vous permet d\'inscrire n\'importe quelles ressources pour votre AC enfant. Aucune garantie n\'est donnée concernant la disponibilité de ce service. Si vous décelez un problème, <a href=\'https://github.com/NLnetLabs/krill/issues/new\'>merci de nous le faire savoir</a>.'
    },
    'rpconfighelp': {
      'heading': 'Banc d\'essai TAL',
      'body': 'Pour récupérer les données publiées par ce banc d\'essai, veuillez svp télécharger ce <a href=\'{tallink}\'>Trust Anchor Locator</a> (TAL) et le configurer dans votre logiciel validateur, le Relying Pary. Noter que vous ne devriez JAMAIS utiliser ce TAL dans un environnement de production. Il est mis à disposition uniquement pour des tests.'
    },
    'regunreg': {
      'heading': 'Inscrire/Désinscrire',
      'body': '<p>Utiliser le formulaire pour inscrire votre autorité de certification RPKI comme un enfant de ce banc d\'essai ainsi vous pourrez créer les \'Route Origin Authorisations\' (ROAs) pour les resources que vous revendiquez.</p><p>Si vous ne voulez pas héberger vos propres  dépôts Rsync et RRDP vous pouvez utiliser le formulaire du Register Publisher  pour configurer la publication de vos ROAs dans le dépôt hébergé par le banc d\'essai. Utilisez les formulaires \'Se désinscrire\' pour annuler les relations précédemment établies (même celles des autres utilisateurs du banc d\'essai!).</p>'
    },
    'rfcdoclink': 'Cliquer pour voir la documentation de ce XML dans le RFC-8183',
    'childhandle': 'Identifiant enfant',
    'publisherhandle': 'Identifiant Publisher',
    'responseXML': 'réponse banc d\'essai au format XML',
    'addChild': {
      'heading': 'Inscrire l\'AC',
      'requestXML': {
        'label': 'Requête XML enfant',
        'placeholder': 'Coller votre <child_request/> XML ici'
      },
      'asnresources': {
        'label': 'Ressources ASN',
        'placeholder': 'Les ressources AS: e.g. AS1, AS3-4'
      },
      'ipv4resources': {
        'label': 'Ressources IPv4',
        'placeholder': 'Les ressources IPv4: e.g. 192.168.0.0/16'
      },
      'ipv6resources': {
        'label': 'Ressources IPv6',
        'placeholder': 'Les ressources IPv6: e.g. 2001:db8::/32'
      },
      'confirm': 'Inscrire l\'AC enfant',
      'format': 'Ce n\'est pas une requête enfant XML valide',
      'required': 'Veuillez svp fournir la requête XML enfant',
      'confirmation': {
        'title': 'Attention',
        'message': 'Êtes-vous sûr de vouloir inscrire cet enfant dans le banc d\'essai ?'
      },
      'success': 'L\'AC enfant \'{child_handle}\' a été ajoutée au banc d\'essai.',
      'registeranother': 'Inscrire une autre AC'
    },
    'removeChild': {
      'heading': 'Désinscrire l\'AC',
      'placeholder': 'Entrer le nom de l\'AC à retirer',
      'confirm': 'Retirer l\'AC enfant',
      'confirmation': {
        'title': 'Attention',
        'message': 'Êtes-vous sûr de vouloir désinscrire cet enfant du banc d\'essai ?'
      },
      'success': 'L\'AC enfant \'{child_handle}\' a été retirée du banc d\'essai.'
    },
    'addPublisher': {
      'heading': 'Inscrire le Publisher',
      'requestXML': {
        'label': 'Requête XML de type Publisher',
        'placeholder': 'Coller votre  <publisher_request/> XML ici'
      },
      'confirm': 'Inscrire le Publisher',
      'format': 'Ceci n\'est pas une requête XML de type Publisher valide',
      'required': 'Veuillez svp fournir la requête XML de type Publisher',
      'confirmation': {
        'title': 'Attention',
        'message': 'Êtes-vous sûr de vouloir inscrire ce Publisher avec le banc d\'essai?'
      },
      'success': 'Le Publisher \'{publisher_handle}\' a été ajouté au banc d\'essai.',
      'registeranother': 'Inscrire un autre Publisher'
    },
    'removePublisher': {
      'heading': 'Désinscrire le Publisher',
      'placeholder': 'Entrer le nom du Publisher à retirer',
      'confirm': 'Retirer le publisher',
      'confirmation': {
        'title': 'Attention',
        'message': 'Etes-vous sûr de vouloir désinscrire ce Publisher avec le banc d\'essai ?'
      },
      'success': 'Le Publisher \'{publisher_handle}\' a été retiré du banc d\'essai.'
    },
    'errors': {
      'invalid_xml': 'XML invalide: {err}',
      'missing_xml_el': 'Element manquant {el}',
      'missing_xml_child_el': 'Elément enfant  {el} de l\'élément {parent} manquant',
      'missing_xml_attr': 'Attribut {attr} sur l\'élement {el} manquant',
      'empty_xml_el': 'Elément {el} ne peut pas être vide',
      'empty_xml_attr': 'Attribut {attr} de l\'élément {el} ne peut pas être vide',
      'non_ascii_xml_el': 'L\'élement {el} ne peut pas contenir de caractères non-ASCII',
      'child_handle_required': 'L\'identifiant Enfant est requis',
      'publisher_handle_required': 'L\'identifiant Publisher est requis',
      'non_base64_certificate_xml_el': 'L\'élement {el} doit contenir un certificat BKPI X.509 auto signé et correctement encodé en base64',
      'invalid_registration_data': 'Vos données d\'inscription n\'ont pas pu être analysées correctement'
    }
  }
};
