export const HERO_DATA = {
  badge: "Artigo Acadêmico Interativo • Edição 2026",
  title: "Mente em Alerta: A Engenharia Social por trás dos Golpes Digitais",
  introParagraph:
    "Imagine receber uma mensagem no WhatsApp: “Oi, pai, troquei de número! Meu aplicativo do banco travou, pode fazer um Pix urgente para mim?”. A foto é do seu filho e o tom parece familiar. Em segundos, a preocupação e a pressa assumem o controle. Essa cena ilustra a essência da Engenharia Social: para um criminoso, quase sempre é mais fácil, barato e rápido manipular a confiança de uma pessoa do que quebrar a criptografia de um sistema.",
  whatsappSample: {
    sender: "+55 11 98432-1190",
    label: "Número não salvo (Foto do seu familiar)",
    message: "“Oi! Troquei de chip hoje. Preciso pagar um boleto que vence agora e meu app do banco bloqueou, consegue fazer esse Pix e te devolvo à noite?”",
    lesson: "Firewalls e senhas fortes protegem máquinas, mas a conscientização protege quem tem a chave."
  },
  highlights: [
    {
      metric: "0",
      title: "falhas técnicas necessárias",
      desc: "O ataque explora decisões e emoções humanas, não bugs de software."
    },
    {
      metric: "1",
      title: "clique pode bastar",
      desc: "Um único código informado ou link aberto no impulso abre a porta."
    },
    {
      metric: "Fator Humano",
      title: "presente na maioria das violações",
      desc: "Relatórios globais apontam a manipulação como principal vetor inicial."
    }
  ]
};

export const PSYCHOLOGY_DATA = {
  heuristicsParagraph:
    "No dia a dia, nosso cérebro economiza energia usando atalhos mentais automáticos — as chamadas heurísticas (estudadas por Daniel Kahneman em 'Rápido e Devagar'). Quando estamos cansados, distraídos ou sob forte estresse emocional, o pensamento rápido assume o volante e desliga o senso crítico. Os golpistas sabem disso e acionam deliberadamente os 6 Princípios de Influência descritos pelo psicólogo Robert Cialdini:",
  cialdiniTriggers: [
    {
      id: "autoridade",
      name: "1. Autoridade",
      explanation: "Cargos, nomes de bancos, termos jurídicos e tom formal reduzem nossa tendência de questionar ordens.",
      scammerPhrase: "“Aqui é do Departamento de Prevenção a Fraudes do seu banco.”",
      icon: "ShieldAlert"
    },
    {
      id: "urgencia",
      name: "2. Urgência e Escassez",
      explanation: "Prazos curtíssimos ou oportunidades únicas criam pressa para impedir que você consulte outra pessoa.",
      scammerPhrase: "“Sua conta será bloqueada em 15 minutos se não atualizar agora.”",
      icon: "Clock"
    },
    {
      id: "reciprocidade",
      name: "3. Reciprocidade",
      explanation: "Oferecer uma ajuda, brinde ou 'favor' inicial gera a obrigação psicológica de retribuir com dados ou acesso.",
      scammerPhrase: "“Já cancelei a taxa indevida para você; só me confirme o código que chegou.”",
      icon: "Gift"
    },
    {
      id: "prova-social",
      name: "4. Prova Social",
      explanation: "Se parece que muita gente já aderiu ou aprovou, nosso cérebro assume automaticamente que é seguro.",
      scammerPhrase: "“Mais de 12 mil clientes já resgataram o benefício hoje! Veja os comentários.”",
      icon: "Users"
    },
    {
      id: "simpatia",
      name: "5. Simpatia e Afinidade",
      explanation: "Elogios, cordialidade extrema e interesses em comum desarmam a desconfiança natural da vítima.",
      scammerPhrase: "“Vi que você também é da área! Estou tentando te ajudar a não perder seus pontos.”",
      icon: "HeartHandshake"
    },
    {
      id: "compromisso",
      name: "6. Compromisso e Coerência",
      explanation: "Pequenos 'sins' iniciais (confirmar nome e CEP) levam a pessoa a aceitar pedidos graves no final.",
      scammerPhrase: "“Como já validamos seus dados básicos, leia apenas o token final para concluir.”",
      icon: "CheckSquare"
    }
  ],
  twitterCallout: {
    type: "Você Sabia?",
    title: "O Ataque ao Twitter em Julho de 2020 começou por telefone (Vishing)",
    text: "Em julho de 2020, criminosos assumiram dezenas de contas globais de alto perfil no Twitter. Segundo as investigações públicas, o ataque não começou quebrando servidores, mas com ligações telefônicas para funcionários se passando pelo suporte interno de TI. Bastou convencer algumas pessoas a digitar suas credenciais em um portal falso."
  }
};

export const ATTACK_CYCLE_DATA = [
  {
    step: 1,
    title: "Pesquisa",
    subtitle: "OSINT e Pegada Digital",
    whatAttackerDoes:
      "Coleta dados públicos nas redes sociais (cargo no LinkedIn, fotos de crachá, viagens, nomes de parentes) e vazamentos antigos.",
    howToInterrupt:
      "Reduza sua exposição pública: nunca poste fotos de crachás, boletos ou passagens."
  },
  {
    step: 2,
    title: "Contato",
    subtitle: "Criação do Pretexto",
    whatAttackerDoes:
      "Inicia a abordagem usando uma história plausível (falso suporte, banco, entregador ou parente com número novo).",
    howToInterrupt:
      "Desconfie de qualquer contato inesperado, mesmo que saiba seu nome e CPF."
  },
  {
    step: 3,
    title: "Manipulação",
    subtitle: "Pressão Emocional",
    whatAttackerDoes:
      "Dispara gatilhos de medo, urgência ou segredo para travar o pensamento analítico e isolar a vítima.",
    howToInterrupt:
      "Sentiu pressa, medo ou euforia? Trate a própria emoção intensa como um alarme e pause."
  },
  {
    step: 4,
    title: "Execução",
    subtitle: "Ação da Vítima",
    whatAttackerDoes:
      "Induz o clique no link, o envio do código SMS de 6 dígitos, o pagamento via Pix ou a instalação de app remoto.",
    howToInterrupt:
      "Exija confirmação por um segundo canal oficial antes de realizar qualquer ação irreversível."
  },
  {
    step: 5,
    title: "Saída",
    subtitle: "Rastros e Fuga",
    whatAttackerDoes:
      "Transfere os valores rapidamente, troca senhas da conta invadida e usa seus contatos para aplicar novos golpes.",
    howToInterrupt:
      "Aja nos primeiros minutos: avise o banco (acionar MED), troque senhas e registre o B.O."
  }
];

export const CATALOG_DATA = {
  technicalFormats: [
    {
      name: "Phishing",
      tag: "E-mail & Sites",
      icon: "Mail",
      desc: "E-mails e páginas clonadas que imitam bancos, lojas ou governo para capturar senhas e dados de cartões."
    },
    {
      name: "Smishing",
      tag: "SMS & WhatsApp",
      icon: "MessageCircle",
      desc: "Mensagens curtas com links encurtados (bit.ly) cobrando taxas falsas de entrega ou alertando sobre bloqueios."
    },
    {
      name: "Vishing",
      tag: "Ligação de Voz",
      icon: "PhoneCall",
      desc: "Golpes por telefone com falsas centrais de atendimento ou suporte técnico induzindo a vítima a revelar códigos."
    },
    {
      name: "Quishing",
      tag: "QR Code",
      icon: "QrCode",
      desc: "QR Codes adulterados em boletos, cartazes ou telas que levam o celular a páginas maliciosas de pagamento."
    },
    {
      name: "Spear Phishing",
      tag: "Alvo Específico",
      icon: "Crosshair",
      desc: "Abordagem sob medida que usa dados reais da vítima (cargo, colegas e projetos) para parecer 100% autêntica."
    },
    {
      name: "Fraude do Falso Presidente (BEC)",
      tag: "Corporativo",
      icon: "Briefcase",
      desc: "Business Email Compromise: golpista se passa por diretor ou fornecedor pedindo pagamento urgente e sigiloso."
    }
  ],
  brazilCommonScams: [
    {
      name: "Falsa Central de Banco",
      tag: "Ligação / SMS",
      icon: "Building2",
      desc: "Alertam sobre uma 'compra suspeita' e pedem que você confirme códigos SMS ou instale um aplicativo para 'proteger' a conta.",
      defense: "Bancos nunca pedem códigos ou instalação de apps. Desligue e ligue para o número no verso do cartão."
    },
    {
      name: "Falso Parente / Número Novo (Pix)",
      tag: "WhatsApp",
      icon: "Smartphone",
      desc: "Usam a foto pública de um filho ou parente, dizem que trocaram de chip e pedem um Pix urgente para pagar uma conta.",
      defense: "Nunca faça Pix sem antes ligar por voz para o número antigo do familiar e pedir a palavra-código."
    },
    {
      name: "Falsa Entrega (Pacote Taxado)",
      tag: "SMS / Correios",
      icon: "Package",
      desc: "SMS informa que sua encomenda está retida na alfândega e exige pagamento de taxa baixa (ex: R$ 7,90) por link curto.",
      defense: "Não clique no link. Abra diretamente o site oficial da transportadora ou loja para checar o rastreio."
    },
    {
      name: "Comprovante de Pix Falso",
      tag: "Vendas Online",
      icon: "FileWarning",
      desc: "O suposto comprador envia um print de comprovante editado (ou Pix agendado) com valor a mais e pede devolução da diferença.",
      defense: "Jamais confie em prints de comprovantes. Confira se o dinheiro realmente caiu no extrato do seu aplicativo."
    },
    {
      name: "Golpes com IA (Voz Clonada e Deepfake)",
      tag: "Inteligência Artificial",
      icon: "Bot",
      desc: "Com poucos segundos de áudio das redes sociais, golpistas clonam vozes de familiares ou executivos para simular emergências.",
      defense: "Ver e ouvir já não bastam como prova: valide pelo segundo canal e use uma palavra-código familiar."
    }
  ]
};

export const MYTHS_TRUTHS_DATA = [
  {
    id: 1,
    statement: "“Só cai em golpe quem é ingênuo ou tem pouca instrução.”",
    verdict: "MITO",
    explanation:
      "Golpistas exploram emoções universais (pressa, medo, vontade de ajudar). Qualquer pessoa, inclusive especialistas, pode cair se abordada em um momento de distração ou estresse."
  },
  {
    id: 2,
    statement: "“Todo golpe tem erros grosseiros de português ou visual amador.”",
    verdict: "MITO",
    explanation:
      "Com o uso de Inteligência Artificial generativa, criminosos criam textos impecáveis, no tom exato das empresas e sem nenhum erro gramatical."
  },
  {
    id: 3,
    statement: "“Se o identificador de chamadas mostrar o nome ou telefone do banco, é seguro atender.”",
    verdict: "MITO",
    explanation:
      "A técnica de Caller ID Spoofing permite falsificar o número que aparece no visor do celular. Na dúvida, desligue e disque você mesmo o número oficial."
  },
  {
    id: 4,
    statement: "“Confirmar o pedido por um segundo canal independente desfaz a maioria dos golpes.”",
    verdict: "VERDADE",
    explanation:
      "Se o pedido chegou por WhatsApp ou e-mail, ligar para um telefone que você já conhecia antes desmonta quase 100% das farsas."
  },
  {
    id: 5,
    statement: "“Se a pessoa na ligação já sabe meu nome completo, CPF e final do cartão, ela é realmente do banco.”",
    verdict: "MITO",
    explanation:
      "Dados básicos circulam em vazamentos antigos. Os golpistas citam seu CPF e os 4 dígitos do cartão justamente para ganhar sua confiança inicial."
  },
  {
    id: 6,
    statement: "“Sentir urgência, medo ou obrigação de segredo é, por si só, um sinal de alerta.”",
    verdict: "VERDADE",
    explanation:
      "Quem exige que você decida agora e 'não conte a ninguém' quer impedir que seu cérebro analítico verifique a história."
  }
];

export const DEFENSE_EMERGENCY_DATA = {
  parePenseVerifique: [
    {
      step: "1. PARE",
      badge: "Pausa de 10s",
      desc: "Não clique, não responda e não transfira no impulso. Respire 10 segundos para retomar o pensamento crítico."
    },
    {
      step: "2. PENSE",
      badge: "Analise o pedido",
      desc: "Por que tanta pressa? É normal o banco ou familiar pedir códigos, senhas ou dinheiro dessa maneira?"
    },
    {
      step: "3. VERIFIQUE",
      badge: "Outro canal",
      desc: "Saia da conversa e confirme a história por um canal oficial que você já tinha salvo antes da abordagem."
    }
  ],
  essentialHabits: [
    {
      title: "Autenticação em Dois Fatores (2FA)",
      desc: "Ative no e-mail, bancos, WhatsApp e redes sociais (prefira app autenticador ou Passkeys em vez de SMS)."
    },
    {
      title: "Senhas Únicas + Gerenciador",
      desc: "Nunca repita a mesma senha em vários sites; um único vazamento antigo comprometeria todas as suas contas."
    },
    {
      title: "Palavra-Código em Família",
      desc: "Combine uma senha verbal secreta entre familiares para confirmar chamadas de emergência e barrar vozes clonadas."
    },
    {
      title: "Regra dos Dois Canais",
      desc: "Em casa ou na empresa, nunca aprove um pagamento usando apenas o mesmo canal em que o pedido chegou."
    },
    {
      title: "Cuidado com Fotos de Crachás e Boletos",
      desc: "Jamais publique fotos usando crachá do trabalho, passagens aéreas ou boletos com códigos de barras visíveis."
    }
  ],
  emergencyCases: [
    {
      id: "fiz-pix",
      label: "Fiz um Pix para golpista",
      badge: "Ação Financeira Imediata",
      immediateAction:
        "Contate seu banco IMEDIATAMENTE pelos canais oficiais e solicite o acionamento do MED (Mecanismo Especial de Devolução do Banco Central), que permite bloquear os valores na conta recebedora para análise de devolução.",
      nextSteps: [
        "Guarde prints da conversa, chave Pix, comprovante e números envolvidos.",
        "Registre o Boletim de Ocorrência (físico ou delegacia online) amparado pela Lei nº 14.155/2021 (estelionato digital) e envie o protocolo ao banco.",
        "Nunca pague 'taxas de liberação' ou supostas empresas recuperadoras."
      ]
    },
    {
      id: "passei-codigo",
      label: "Passei um código ou senha",
      badge: "Contenção de Conta",
      immediateAction:
        "Acesse a conta afetada imediatamente, troque a senha e clique em 'Encerrar todas as sessões ativas' (desconectar de todos os dispositivos).",
      nextSteps: [
        "Se era código bancário, ligue para o número no verso do cartão e bloqueie movimentações.",
        "Se era código do WhatsApp, reinstale o app, peça novo código e ative a confirmação em duas etapas (PIN).",
        "Avise amigos e familiares para ignorarem pedidos de dinheiro em seu nome."
      ]
    },
    {
      id: "cliquei-link",
      label: "Cliquei em link suspeito",
      badge: "Prevenção de Credenciais",
      immediateAction:
        "Feche a página na hora. Se você chegou a digitar senha ou cartão no site falso, troque a senha imediatamente e bloqueie o cartão temporariamente no app do banco.",
      nextSteps: [
        "Ative a verificação em dois fatores (2FA) nas suas contas principais.",
        "Verifique se nenhum arquivo estranho foi baixado no aparelho.",
        "No ambiente corporativo, avise imediatamente a equipe de TI/Segurança."
      ]
    },
    {
      id: "instalei-app",
      label: "Instalei app de falso suporte",
      badge: "Emergência Crítica",
      immediateAction:
        "DESCONECTE o celular ou computador da internet na hora (ative o Modo Avião ou desligue o Wi-Fi) para interromper o controle remoto do criminoso.",
      nextSteps: [
        "Desinstale o aplicativo suspeito (como AnyDesk, TeamViewer ou falsos módulos de segurança).",
        "Usando OUTRO aparelho limpo, ligue para o banco e troque suas senhas principais.",
        "Registre Boletim de Ocorrência e monitore seu CPF no Registrato (Banco Central)."
      ]
    }
  ]
};

export const QUIZ_GLOSSARY_DATA = {
  questions: [
    {
      id: 1,
      question: "1. Por que a Engenharia Social é tão eficaz mesmo contra empresas tecnológicas?",
      options: [
        { id: "a", text: "a) Porque desativa automaticamente qualquer antivírus pela rede elétrica" },
        { id: "b", text: "b) Porque manipula a psicologia humana para que a própria vítima entregue a chave" },
        { id: "c", text: "c) Porque só funciona em computadores sem senha" }
      ],
      correct: "b",
      explanation: "Exato! Quando a pessoa é convencida a digitar a própria senha ou aprovar um Pix, as barreiras técnicas são contornadas."
    },
    {
      id: 2,
      question: "2. Qual gatilho de Cialdini está sendo usado na frase: 'Sua conta será bloqueada em 10 minutos se não clicar aqui'?",
      options: [
        { id: "a", text: "a) Simpatia e Afinidade" },
        { id: "b", text: "b) Urgência e Escassez (somado ao Medo)" },
        { id: "c", text: "c) Prova Social" }
      ],
      correct: "b",
      explanation: "Correto! Prazos curtos fabricam pressa para impedir que você pare, respire e verifique a informação."
    },
    {
      id: 3,
      question: "3. O que significa a sigla OSINT na primeira etapa do Ciclo do Ataque?",
      options: [
        { id: "a", text: "a) Coleta de informações em fontes públicas (redes sociais, sites, registros abertos)" },
        { id: "b", text: "b) Um sistema operacional exclusivo de bancos" },
        { id: "c", text: "c) Um bloqueador de chamadas telefônicas" }
      ],
      correct: "a",
      explanation: "Isso mesmo! Com OSINT (Open Source Intelligence), o golpista estuda sua pegada digital para criar um pretexto convincente."
    },
    {
      id: 4,
      question: "4. O 'atendente do banco' liga informando uma compra suspeita e pede o código enviado por SMS. Qual a reação correta?",
      options: [
        { id: "a", text: "a) Informar o código rápido para cancelar a compra" },
        { id: "b", text: "b) Desligar e ligar de volta para o número oficial impresso no verso do cartão" },
        { id: "c", text: "c) Confiar porque o número na tela parece ser do banco" }
      ],
      correct: "b",
      explanation: "Perfeito! O identificador de chamadas pode ser falsificado (Spoofing) e nenhum banco pede códigos SMS por telefone."
    },
    {
      id: 5,
      question: "5. Diante de uma ligação com voz idêntica à de um parente chorando e pedindo dinheiro (possível IA/Deepfake), o que fazer?",
      options: [
        { id: "a", text: "a) Transferir o valor imediatamente e manter segredo" },
        { id: "b", text: "b) Exigir a palavra-código da família, desligar e ligar para o número oficial do familiar" },
        { id: "c", text: "c) Tentar adivinhar apenas pela qualidade do áudio" }
      ],
      correct: "b",
      explanation: "Exato! Com clonagem de voz por IA, o procedimento (palavra-código + ligar de volta no número conhecido) protege você."
    },
    {
      id: 6,
      question: "6. Qual mecanismo oficial do Banco Central deve ser solicitado ao banco imediatamente após cair em um golpe via Pix?",
      options: [
        { id: "a", text: "a) MED (Mecanismo Especial de Devolução)" },
        { id: "b", text: "b) Pagamento de boleto de estorno enviado por SMS" },
        { id: "c", text: "c) Cancelamento da linha telefônica" }
      ],
      correct: "a",
      explanation: "Correto! O MED permite que o banco bloqueie os recursos na conta recebedora para análise de devolução em casos de fraude."
    }
  ],
  glossary: [
    {
      term: "Engenharia Social",
      tag: "Conceito Central",
      def: "Manipulação psicológica que induz pessoas a revelar dados confidenciais, clicar em iscas ou realizar ações financeiras."
    },
    {
      term: "Phishing",
      tag: "Ataque Digital",
      def: "E-mails e sites falsos que imitam instituições legítimas para 'pescar' senhas, dados bancários e cartões."
    },
    {
      term: "Smishing & Vishing",
      tag: "SMS e Voz",
      def: "Variações do phishing aplicadas por mensagens SMS/WhatsApp (Smishing) ou ligações telefônicas (Vishing)."
    },
    {
      term: "OSINT",
      tag: "Pesquisa",
      def: "Inteligência de Fontes Abertas: coleta de dados públicos em redes sociais e sites para personalizar golpes."
    },
    {
      term: "Pretexting",
      tag: "Roteiro",
      def: "Criação de uma história e identidade falsas (falso suporte, auditor, parente) para ganhar a confiança da vítima."
    },
    {
      term: "Deepfake",
      tag: "IA Generativa",
      def: "Voz, imagem ou vídeo sintetizado por Inteligência Artificial para imitar com realismo outra pessoa."
    },
    {
      term: "2FA (Dois Fatores)",
      tag: "Proteção",
      def: "Camada extra de segurança que exige um segundo código ou biometria além da senha para acessar uma conta."
    },
    {
      term: "MED (Pix)",
      tag: "Banco Central",
      def: "Mecanismo Especial de Devolução criado pelo Banco Central para rastrear e bloquear valores em fraudes no Pix."
    }
  ]
};

export const FOOTER_DATA = {
  institution: "Universidade Paulista (UNIP)",
  course: "Ciência da Computação",
  creators: "Gabriel Oliveira e Fernanda Corsi",
  references: [
    {
      name: "CERT.br / NIC.br",
      detail: "Cartilha de Segurança para Internet e prevenção contra phishing e engenharia social."
    },
    {
      name: "Banco Central do Brasil",
      detail: "Diretrizes de segurança do Pix e regulamentação do Mecanismo Especial de Devolução (MED)."
    },
    {
      name: "SaferNet Brasil & Legislação",
      detail: "Canais de orientação contra crimes cibernéticos, LGPD (Lei 13.709/18) e Lei nº 14.155/2021."
    }
  ]
};
