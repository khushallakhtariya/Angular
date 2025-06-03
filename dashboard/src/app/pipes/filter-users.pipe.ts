import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers',
  standalone: true
})
export class FilterUsersPipe implements PipeTransform {
  transform(users: any[], searchTerm: string): any[] {
    if (!users || !searchTerm) return users;

    const lowerSearch = searchTerm.toLowerCase();
    return users.filter(user =>
      user.name.toLowerCase().includes(lowerSearch) ||
      user.username.toLowerCase().includes(lowerSearch) ||
      user.email.toLowerCase().includes(lowerSearch) ||
      user.company?.name?.toLowerCase().includes(lowerSearch)
    );
  }
}
