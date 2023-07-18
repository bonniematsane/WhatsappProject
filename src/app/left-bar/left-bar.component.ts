import { Component } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent {
  items = [
    {
      image: '../../assets/notti.png',
      title: 'Notifications'
    },
    {
      image: '../../assets/sec.png',
      title: 'Security'
    },
    {
      image: '../../assets/theme.png',
      title: 'Theme'
    },
    {
      image: '../../assets/chat.png',
      title: 'Chatwallpaper'
    },
    {
      image: '../../assets/blocked.jpg',
      title: 'Blocked'
    },
    {
      image: '../../assets/desktop.jpg',
      title: 'Desktop settings'
    },
    {
      image: '../../assets/keyb.png',
      title: 'KeyboardShortcuts'
    },
    {
      image: '../../assets/help.png',
      title: 'Help'
    }
  ];
}
