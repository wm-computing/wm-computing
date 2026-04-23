const serviceData = {
  gestao: {
    icon: '🧠',
    title: 'Gestão de TI',
    intro: 'Gerenciamento completo da infraestrutura tecnológica da empresa, com foco em organização, desempenho e continuidade operacional.',
    features: [
      'Identificação proativa de pontos de melhoria',
      'Garantia de tecnologia previsível e eficiente',
      'Redução drástica de falhas operacionais',
      'Aumento mensurável da produtividade',
      'Total controle sobre recursos tecnológicos'
    ],
    stats: [
      { label: 'Eficiência Operacional', value: '+40', unit: '%' },
      { label: 'Controle de Ativos', value: '100', unit: '%' }
    ]
  },
  suporte: {
    icon: '⚙️',
    title: 'Suporte Técnico Especializado',
    intro: 'Atendimento técnico remoto e presencial com alto padrão de qualidade, focado na rápida resolução de incidentes.',
    features: [
      'Suporte contínuo aos usuários finais',
      'Processos estruturados e ágeis',
      'Redução significativa do tempo de parada',
      'Prevenção de evolução de falhas simples',
      'Atendimento consultivo e resolutivo'
    ],
    stats: [
      { label: 'Tempo de Resposta', value: '< 15', unit: 'MIN' },
      { label: 'Satisfação Usuários', value: '98', unit: '%' }
    ]
  },
  backup: {
    icon: '☁️',
    title: 'Backup em Nuvem',
    intro: 'Soluções de backup automatizado com armazenamento seguro em nuvem, protegendo informações críticas.',
    features: [
      'Proteção contra perdas, falhas ou ataques',
      'Rotinas contínuas de backup automatizado',
      'Recuperação rápida e íntegra de dados',
      'Continuidade de negócio em cenários adversos',
      'Criptografia de ponta a ponta no transporte'
    ],
    stats: [
      { label: 'Disponibilidade Dados', value: '99.9', unit: '%' },
      { label: 'RPO (Janela Backup)', value: '< 1', unit: 'H' }
    ]
  },
  cyber: {
    icon: '🛡️',
    title: 'Cibersegurança',
    intro: 'Implementação de soluções avançadas de segurança digital, incluindo antivírus corporativo e EDR.',
    features: [
      'Políticas de proteção contra ameaças modernas',
      'Monitoramento preventivo de riscos cibernéticos',
      'Defesa contra malwares e ataques sofisticados',
      'Proteção ativa de endpoints corporativos',
      'Auditoria contínua de vulnerabilidades'
    ],
    stats: [
      { label: 'Detecção de Ameaças', value: '99.9', unit: '%' },
      { label: 'Monitoramento', value: '24/7', unit: '' }
    ]
  },
  firewall: {
    icon: '🔥',
    title: 'Firewall e Segurança de Rede',
    intro: 'Configuração e gerenciamento de firewall com controle rigoroso do tráfego de rede.',
    features: [
      'Bloqueio proativo de acessos indevidos',
      'Proteção contra ameaças externas constantes',
      'Garantia de integridade das informações',
      'Confidencialidade e disponibilidade total',
      'Gestão de VPNs e acessos remotos seguros'
    ],
    stats: [
      { label: 'Bloqueio de Intrusão', value: '100', unit: '%' },
      { label: 'Filtro de Conteúdo', value: 'ATIVO', unit: '' }
    ]
  },
  servers: {
    icon: '⚡',
    title: 'Servidores e Virtualização',
    intro: 'Implantação, administração e manutenção de servidores físicos e virtuais para aplicações críticas.',
    features: [
      'Garantia de alta disponibilidade e performance',
      'Virtualização para otimização de recursos',
      'Escalabilidade e estabilidade do ambiente',
      'Gestão de domínios e permissões (AD)',
      'Monitoramento de carga e saúde de hardware'
    ],
    stats: [
      { label: 'Virtualização', value: 'PRO', unit: '' },
      { label: 'Uptime Servidores', value: '99.9', unit: '%' }
    ]
  },
  infra: {
    icon: '🌐',
    title: 'Infraestrutura e Cabeamento',
    intro: 'Planejamento, organização e implementação de redes estruturadas e topologia eficiente.',
    features: [
      'Cabeamento certificado e switches gerenciáveis',
      'Base sólida para operação tecnológica estável',
      'Redução drástica de falhas físicas de rede',
      'Melhoria do desempenho geral da comunicação',
      'Documentação completa da topologia física'
    ],
    stats: [
      { label: 'Certificação Cabo', value: 'CAT6', unit: '' },
      { label: 'Estabilidade Link', value: 'ALTA', unit: '' }
    ]
  },
  monitoramento: {
    icon: '📡',
    title: 'Monitoramento Contínuo',
    intro: 'Acompanhamento em tempo real de toda a infraestrutura de TI para ação preventiva.',
    features: [
      'Identificação de falhas antes do impacto',
      'Redução de riscos operacionais críticos',
      'Garantia de maior estabilidade e segurança',
      'Dashboards em tempo real da saúde da rede',
      'Alertas automáticos para equipe técnica'
    ],
    stats: [
      { label: 'Visibilidade Real', value: '100', unit: '%' },
      { label: 'Ação Preventiva', value: 'SIM', unit: '' }
    ]
  },
  dados: {
    icon: '🔐',
    title: 'Proteção e Gestão de Dados',
    intro: 'Implementação de políticas e controles para garantir a segurança e organização das informações.',
    features: [
      'Proteção contra perda e vazamento de dados',
      'Controle rígido de acessos e privilégios',
      'Organização e integridade das bases de dados',
      'Confiabilidade total das informações corporativas',
      'Conformidade com padrões de segurança'
    ],
    stats: [
      { label: 'Integridade', value: 'TOTAL', unit: '' },
      { label: 'Segurança de Acesso', value: 'MAX', unit: '' }
    ]
  },
  consultoria: {
    icon: '📊',
    title: 'Consultoria e Planejamento em TI',
    intro: 'Análise estratégica do ambiente tecnológico com foco em evolução e redução de riscos.',
    features: [
      'Melhoria contínua dos processos tecnológicos',
      'Apoio especializado na tomada de decisões',
      'Alinhamento da TI aos objetivos de negócio',
      'Garantia de investimentos em TI assertivos',
      'Roadmap tecnológico para crescimento futuro'
    ],
    stats: [
      { label: 'Retorno sobre Invest.', value: 'ALTO', unit: '' },
      { label: 'Visão Estratégica', value: '360', unit: 'º' }
    ]
  }
};

function openModal(serviceId) {
  const overlay = document.getElementById('modal-overlay');
  const contentContainer = document.getElementById('modal-content');
  const modalIcon = document.getElementById('modal-icon');
  const modalTitle = document.getElementById('modal-title');
  const data = serviceData[serviceId];

  if (!data || !overlay || !contentContainer) return;

  // Set Header
  modalIcon.textContent = data.icon;
  modalTitle.textContent = `MOD_ANALYSIS // ${serviceId.toUpperCase()}`;

  // Build Body
  contentContainer.innerHTML = `
    <div class="modal-intro reveal-up">${data.intro}</div>
    <div class="modal-technical-grid">
      <div class="modal-features">
        <h4>[ RECURSOS_DO_SISTEMA ]</h4>
        <ul>
          ${data.features.map((f, i) => `
            <li class="reveal-up" style="transition-delay: ${0.1 + (i * 0.05)}s">
              <span>//</span> ${f}
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="modal-stats reveal-up" style="transition-delay: 0.3s">
        ${data.stats.map(s => `
          <div class="stat-item">
            <div class="stat-label">${s.label}</div>
            <div class="stat-value">
              ${s.value}
              ${s.unit ? `<span class="stat-unit">${s.unit}</span>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Show Modal
  overlay.classList.add('is-active');
  document.body.style.overflow = 'hidden';

  // Trigger animations
  setTimeout(() => {
    contentContainer.querySelectorAll('.reveal-up').forEach(el => {
      el.classList.add('active');
    });
  }, 50);
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('is-active');
  document.body.style.overflow = '';
}

// Global listeners
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }
});
