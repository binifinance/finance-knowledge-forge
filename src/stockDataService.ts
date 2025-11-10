import axios from 'axios';

interface StockDataPoint {
  date: string;
  price: number;
}

export const fetchStockData = async (symbol: string, period: string = '10y'): Promise<StockDataPoint[]> => {
  try {
    // Using Yahoo Finance API v8
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`;
    
    const params = {
      range: period,
      interval: '1mo', // Monthly data for 10 years
      events: 'history'
    };

    const response = await axios.get(url, { params });
    
    const result = response.data.chart.result[0];
    const timestamps = result.timestamp;
    const prices = result.indicators.quote[0].close;

    // Transform data into chart-friendly format
    const chartData: StockDataPoint[] = timestamps.map((timestamp: number, index: number) => ({
      date: new Date(timestamp * 1000).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short' 
      }),
      price: prices[index] ? Number(prices[index].toFixed(2)) : 0
    })).filter(point => point.price > 0); // Remove null prices

    return chartData;
  } catch (error) {
    console.error(`Error fetching data for ${symbol}:`, error);
    throw new Error(`Failed to fetch data for ${symbol}`);
  }
};
