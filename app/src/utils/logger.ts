class Logger {
  info(...args: any[]) {
    console.log(`[INFO][${new Date().toISOString()}]`, ...args);
  }
}

export const logger = new Logger();
