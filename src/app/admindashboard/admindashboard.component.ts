import { Component } from '@angular/core';
import ApexCharts from 'apexcharts';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
  public ngOnInit(){
// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll<HTMLDivElement>('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar') as HTMLDivElement;

allDropdown.forEach((item: HTMLDivElement) => {
  const a = item.parentElement!.querySelector<HTMLAnchorElement>('a:first-child')!;
  a.addEventListener('click', function (e) {
    e.preventDefault();

    if(!this.classList.contains('active')) {
      allDropdown.forEach(i => {
        const aLink = i.parentElement!.querySelector<HTMLAnchorElement>('a:first-child')!;

        aLink.classList.remove('active');
        i.classList.remove('show');
      })
    }

    this.classList.toggle('active');
    item.classList.toggle('show');
  })
})

// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector<HTMLDivElement>('nav .toggle-sidebar')!;
const allSideDivider = document.querySelectorAll<HTMLSpanElement>('#sidebar .divider');

if(sidebar.classList.contains('hide')) {
  allSideDivider.forEach((item: HTMLSpanElement) => {
    item.textContent = '-'
  })
  allDropdown.forEach((item: HTMLDivElement) => {
    const a = item.parentElement!.querySelector<HTMLAnchorElement>('a:first-child')!;
    a.classList.remove('active');
    item.classList.remove('show');
  })
} else {
  allSideDivider.forEach((item: HTMLSpanElement) => {
    item.textContent = item.dataset['text']!;
  })
}

toggleSidebar.addEventListener('click', function () {
  sidebar.classList.toggle('hide');

  if(sidebar.classList.contains('hide')) {
    allSideDivider.forEach((item: HTMLSpanElement) => {
      item.textContent = '-'
    })

    allDropdown.forEach((item: HTMLDivElement) => {
      const a = item.parentElement!.querySelector<HTMLAnchorElement>('a:first-child')!;
      a.classList.remove('active');
      item.classList.remove('show');
    })
  } else {
    allSideDivider.forEach((item: HTMLSpanElement) => {
      item.textContent = item.dataset['text']!;
    })
  }
})

sidebar.addEventListener('mouseleave', function () {
  if(this.classList.contains('hide')) {
    allDropdown.forEach((item: HTMLDivElement) => {
      const a = item.parentElement!.querySelector<HTMLAnchorElement>('a:first-child')!;
      a.classList.remove('active');
      item.classList.remove('show');
    })
    allSideDivider.forEach((item: HTMLSpanElement) => {
      item.textContent = '-'
    })
  }
})

sidebar.addEventListener('mouseenter', function () {
  if(this.classList.contains('hide')) {
    allDropdown.forEach((item: HTMLDivElement) => {
      const a = item.parentElement!.querySelector<HTMLAnchorElement>('a:first-child')!;
      a.classList.remove('active');
      item.classList.remove('show');
    })
    allSideDivider.forEach((item: HTMLSpanElement) => {
      item.textContent = item.dataset['text']!;
    })
  }
})

// PROFILE DROPDOWN
const profile = document.querySelector<HTMLDivElement>('nav .profile')!;
const myImgProfile = profile.querySelector<HTMLImageElement>('img')!;
const myDropdownProfile = profile.querySelector<HTMLDivElement>('.profile-link')!;

myImgProfile.addEventListener('click', function () {
  myDropdownProfile.classList.toggle('show');
})


// MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu') as NodeListOf<HTMLDivElement>;

allMenu.forEach(item => {
  const icon = item.querySelector('.icon') as HTMLSpanElement | null;
  const menuLink = item.querySelector('.menu-link') as HTMLUListElement | null;

  icon?.addEventListener('click', function () {
    menuLink?.classList.toggle('show');
  })
})

const imgProfile = document.querySelector('.profile-img') as HTMLImageElement;
const dropdownProfile = document.querySelector('.dropdown-profile') as HTMLDivElement;

window.addEventListener('click', function (e) {
  if (e.target !== imgProfile) {
    if (e.target !== dropdownProfile) {
      if (dropdownProfile.classList.contains('show')) {
        dropdownProfile.classList.remove('show');
      }
    }
  }

  allMenu.forEach(item => {
    const icon = item.querySelector('.icon') as HTMLSpanElement | null;
    const menuLink = item.querySelector('.menu-link') as HTMLUListElement | null;

    if (e.target !== icon) {
      if (e.target !== menuLink) {
        if (menuLink?.classList.contains('show')) {
          menuLink.classList.remove('show')
        }
      }
    }
  })
})
// PROGRESSBAR
const allProgress = document.querySelectorAll('main .card .progress') as NodeListOf<HTMLDivElement>;

allProgress.forEach(item => {
  item.style.setProperty('--value', item.dataset['value']!);
});

// APEXCHART
const options: ApexCharts.ApexOptions = {
  series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
};

const chart = new ApexCharts(document.querySelector("#chart") as HTMLElement, options);
chart.render();

}
}
