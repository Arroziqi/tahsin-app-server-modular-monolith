import { Injectable } from '@nestjs/common';

@Injectable()
export class TimeService {
  static hhmmToMinutes(timeStr: string): number {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
  }

  static minutesToHHMM(minutes: number): string {
    const h: string = String(Math.floor(minutes / 60)).padStart(2, '0');
    const m: string = String(minutes % 60).padStart(2, '0');
    return `${h}:${m}`;
  }
}
