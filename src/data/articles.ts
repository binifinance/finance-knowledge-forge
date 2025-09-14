import type { Article } from '@/components/ArticleBlock';

export const sampleArticles: Article[] = [
  {
    id: "treasury-management-accounting-impacts",
    section: "Accounting",
    title: "Treasury Management: Key Accounting Implications",
    author: "Finance Team",
    date: "2025-09-14",
    tags: ["Treasury", "Cash Management", "Risk Management"],
    body: `Treasury management involves optimizing cash, investments, and financial risk management across an organization.

Accounting impact: classification of cash equivalents and short-term investments must follow guidance under applicable accounting standards such as ASC 320 or IFRS 9. Organizations need to carefully evaluate the measurement basis for financial instruments.

Entities must evaluate measurement for instruments under applicable accounting standards. The classification affects whether instruments are measured at fair value through profit or loss, fair value through other comprehensive income, or amortized cost.

Intercompany cash pooling raises consolidation and disclosure considerations. When multiple entities participate in cash pooling arrangements, the accounting treatment must reflect the substance of the arrangement and comply with consolidation requirements.

Hedging strategies require hedge accounting documentation and ongoing effectiveness testing. Organizations implementing hedging strategies must establish formal documentation at inception and perform regular effectiveness assessments.

Cash flow hedges, fair value hedges, and net investment hedges each have specific accounting requirements. The hedge accounting model provides alignment between the economics of risk management activities and their accounting representation.

Risk management objectives must be clearly defined and documented. This includes identification of the hedged risk, the hedging instrument, and the method for assessing hedge effectiveness.

Documentation requirements include formal designation and documentation of hedging relationships. This must occur at the inception of the hedge and include the entity's risk management objective and strategy.

Effectiveness testing must be performed on an ongoing basis. Hedge effectiveness must be assessed at inception and throughout the life of the hedging relationship.`,
    excerptLines: [
      "Treasury management involves optimizing cash, investments, and financial risk management.",
      "Accounting impact: classification of cash equivalents and short-term investments must follow guidance.",
      "Entities must evaluate measurement for instruments under applicable accounting standards.",
      "Intercompany cash pooling raises consolidation and disclosure considerations.",
      "Hedging strategies require hedge accounting documentation and ongoing effectiveness testing."
    ],
    related: ["fx-rate-movements-business-impact", "revenue-recognition-complexities"]
  },
  {
    id: "fx-rate-movements-business-impact",
    section: "Finance",
    title: "FX Rate Movements and Business Impact",
    author: "Market Desk",
    date: "2025-09-14",
    tags: ["Foreign Exchange", "Currency Risk", "Business Impact"],
    body: `Exchange rate volatility affects revenue when sales or costs are in foreign currencies, creating translation and transaction exposure for multinational organizations.

Financial reporting needs clear disclosure of currency exposures and translation policies. Companies must provide transparent information about their foreign currency risk and how they manage these exposures in their financial statements.

Businesses may use natural hedges or derivative instruments to mitigate exposure. Natural hedging involves matching foreign currency revenues with foreign currency costs in the same currency, while derivative instruments include forwards, options, and swaps.

Interest rate shifts often move in tandem with currency flows and affect borrowing costs. The relationship between interest rates and exchange rates is fundamental to understanding currency movements and their impact on business operations.

Operational planning should include scenario analysis for major currency moves. Companies should develop contingency plans for various exchange rate scenarios to ensure business continuity and profitability.

Currency translation affects consolidated financial statements when subsidiaries operate in different functional currencies. The translation process can create significant volatility in reported results even when underlying operations are stable.

Transaction exposure arises from pending sales, purchases, or other commitments denominated in foreign currencies. This exposure creates uncertainty about the home currency value of future cash flows.

Economic exposure represents the impact of currency changes on the present value of future cash flows. This broader measure captures the competitive effects of currency movements on market position and profitability.

Forward contracts can lock in exchange rates for future transactions, providing certainty about cash flows. However, forward contracts also eliminate the potential to benefit from favorable currency movements.`,
    excerptLines: [
      "Exchange rate volatility affects revenue when sales or costs are in foreign currencies.",
      "Financial reporting needs clear disclosure of currency exposures and translation policies.",
      "Businesses may use natural hedges or derivative instruments to mitigate exposure.",
      "Interest rate shifts often move in tandem with currency flows and affect borrowing costs.",
      "Operational planning should include scenario analysis for major currency moves."
    ],
    related: ["treasury-management-accounting-impacts", "inflation-impact-analysis"]
  },
  {
    id: "revenue-recognition-complexities",
    section: "Accounting",
    title: "Revenue Recognition in Complex Arrangements",
    author: "Technical Accounting",
    date: "2025-09-10",
    tags: ["Revenue", "ASC 606", "IFRS 15"],
    body: `Revenue recognition under ASC 606 and IFRS 15 requires a five-step approach that fundamentally changed how companies recognize revenue from customer contracts.

Step one involves identifying the contract with a customer. This requires enforceable rights and obligations, commercial substance, and probable collection of consideration.

Step two requires identification of performance obligations within the contract. A performance obligation is a promise to transfer distinct goods or services to the customer.

Step three involves determining the transaction price, which is the amount of consideration the entity expects to receive. This includes variable consideration, significant financing components, and non-cash consideration.

Step four allocates the transaction price to performance obligations based on relative standalone selling prices. When standalone selling prices are not observable, companies must estimate them using approved methods.

Step five recognizes revenue as performance obligations are satisfied, either over time or at a point in time. The timing depends on when control of goods or services transfers to the customer.

Contract modifications require careful analysis to determine whether they should be treated as separate contracts or modifications to existing contracts. The accounting treatment depends on whether additional goods or services are distinct and priced at standalone selling prices.

Variable consideration includes discounts, rebates, refunds, credits, price concessions, incentives, performance bonuses, penalties, and other similar items. Companies must estimate variable consideration and include it in the transaction price to the extent it's highly probable that a significant reversal won't occur.

Practical expedients are available for certain situations, such as adjusting the promised amount of consideration for significant financing components when the payment period is one year or less.`,
    excerptLines: [
      "Revenue recognition under ASC 606 and IFRS 15 requires a five-step approach.",
      "Step one involves identifying the contract with enforceable rights and obligations.",
      "Performance obligations represent promises to transfer distinct goods or services.",
      "Transaction price determination includes variable consideration and financing components.",
      "Revenue is recognized as control transfers to the customer over time or at a point in time."
    ],
    related: ["treasury-management-accounting-impacts", "lease-accounting-overview"]
  },
  {
    id: "inflation-impact-analysis",
    section: "Finance",
    title: "Inflation Trends and Economic Indicators",
    author: "Economic Research",
    date: "2025-09-08",
    tags: ["Inflation", "CPI", "Economic Indicators"],
    body: `Inflation measurement through the Consumer Price Index (CPI) provides critical insights into price level changes that affect business operations and consumer purchasing power.

Core inflation, which excludes volatile food and energy prices, often provides a better indication of underlying inflationary trends. Central banks typically focus on core measures when making monetary policy decisions.

Supply chain disruptions can create temporary inflationary pressures that may persist longer than initially expected. Companies must distinguish between temporary and structural cost increases when planning pricing strategies.

Labor market tightness contributes to wage inflation, which can become self-reinforcing as higher wages increase consumer spending power and demand for goods and services.

Monetary policy responses to inflation include interest rate adjustments and quantitative tightening measures. These policy changes have broad implications for business financing costs and investment decisions.

Inflation expectations play a crucial role in actual inflation outcomes. When consumers and businesses expect higher prices, they may adjust behavior in ways that contribute to actual price increases.

International comparisons of inflation rates can reveal currency implications and trade competitiveness effects. Countries with higher inflation rates may experience currency depreciation relative to lower-inflation trading partners.

Sector-specific inflation rates vary significantly across industries. Energy, housing, and healthcare often experience different inflationary pressures than manufactured goods or services.

Hedging strategies against inflation include real assets, inflation-linked securities, and pricing mechanisms that adjust automatically with inflation indices.`,
    excerptLines: [
      "Inflation measurement through CPI provides insights into price changes affecting businesses.",
      "Core inflation excludes volatile components and indicates underlying trends.",
      "Supply chain disruptions create inflationary pressures that may persist.",
      "Labor market tightness contributes to wage inflation with reinforcing effects.",
      "Monetary policy responses include rate adjustments affecting business financing."
    ],
    related: ["fx-rate-movements-business-impact", "purchasing-power-analysis"]
  },
  {
    id: "lease-accounting-overview",
    section: "Accounting",
    title: "Lease Accounting Under ASC 842 and IFRS 16",
    author: "Technical Accounting",
    date: "2025-09-05",
    tags: ["Leasing", "ASC 842", "IFRS 16"],
    body: `Lease accounting standards ASC 842 and IFRS 16 fundamentally changed lease accounting by bringing most leases onto the balance sheet, eliminating the distinction between operating and capital leases for lessees.

Right-of-use assets and lease liabilities must be recognized for virtually all leases longer than 12 months. The lease liability is measured at the present value of unpaid lease payments, while the right-of-use asset includes the lease liability plus prepaid rent and initial direct costs.

Lease classification affects income statement presentation. Finance leases (similar to capital leases under prior standards) result in interest expense and amortization, while operating leases show lease expense.

Discount rates present implementation challenges when the rate implicit in the lease is not readily determinable. Lessees must use their incremental borrowing rate, which requires judgment and may vary by lease term and underlying asset.

Variable lease payments that depend on an index or rate are included in the lease liability measurement. Other variable payments, such as those based on usage or performance, are expensed as incurred.

Lease modifications require assessment of whether the modification creates a separate lease or should be accounted for as a modification of the existing lease. The determination depends on whether additional right of use is granted and pricing.

Short-term lease exemption allows entities to elect not to recognize right-of-use assets and lease liabilities for leases with terms of 12 months or less. This election must be made by class of underlying asset.

Embedded leases within service agreements require careful analysis to determine whether an arrangement contains a lease. The assessment focuses on whether there is an identified asset and the right to control its use.`,
    excerptLines: [
      "ASC 842 and IFRS 16 bring most leases onto the balance sheet.",
      "Right-of-use assets and lease liabilities must be recognized for leases over 12 months.",
      "Lease classification affects whether costs are presented as interest and amortization or lease expense.",
      "Discount rates require judgment when implicit rates are not determinable.",
      "Variable lease payments based on indices are included in initial measurement."
    ],
    related: ["revenue-recognition-complexities", "treasury-management-accounting-impacts"]
  },
  {
    id: "purchasing-power-analysis",
    section: "Finance",
    title: "Purchasing Power Index and Economic Signals",
    author: "Market Analysis Team",
    date: "2025-09-03",
    tags: ["Purchasing Power", "Economic Indicators", "Consumer Behavior"],
    body: `Purchasing power indices measure consumers' ability to buy goods and services, providing crucial insights into economic health and consumer spending capacity across different regions and time periods.

Regional variations in purchasing power reflect differences in local costs of living, wage levels, and economic development. Companies must consider these variations when setting pricing strategies and evaluating market opportunities.

Currency fluctuations significantly impact purchasing power comparisons between countries. Exchange rate movements can quickly alter the relative attractiveness of different markets for both consumers and businesses.

Income inequality affects aggregate purchasing power calculations and masks important distributional effects. High-income consumers may maintain spending while lower-income segments reduce consumption significantly.

Business cycle correlations show purchasing power typically declining during recessions and recovering during expansions. However, the timing and magnitude of these changes vary significantly across sectors and regions.

Technological disruption can alter traditional purchasing power relationships by changing the relative prices of goods and services. Digital goods and services often have different price dynamics than physical products.

Government policy interventions, including stimulus payments, tax changes, and transfer programs, can temporarily boost purchasing power beyond what wage and employment data would suggest.

Demographic trends influence purchasing power patterns as different age cohorts have varying consumption preferences and financial resources. Aging populations typically shift spending toward healthcare and services.

International trade implications arise when purchasing power differentials create arbitrage opportunities or affect competitiveness in global markets.`,
    excerptLines: [
      "Purchasing power indices measure consumers' ability to buy goods and services.",
      "Regional variations reflect differences in costs, wages, and economic development.",
      "Currency fluctuations significantly impact international purchasing power comparisons.",
      "Income inequality affects calculations and masks important distributional effects.",
      "Business cycles correlate with purchasing power changes across sectors."
    ],
    related: ["inflation-impact-analysis", "consumer-sentiment-surveys"]
  }
];

export const getArticlesBySection = (section: 'Accounting' | 'Finance') => {
  return sampleArticles.filter(article => article.section === section);
};

export const getArticleById = (id: string) => {
  return sampleArticles.find(article => article.id === id);
};

export const getRelatedArticles = (article: Article) => {
  if (!article.related) return [];
  return article.related
    .map(id => getArticleById(id))
    .filter((a): a is Article => a !== undefined);
};