import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConnectionInfo, Album } from 'src/app/albums/models';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { FormValidationMessages, getFormErrors, trimValue } from 'src/app/@shared/utils';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { AlbumsService } from 'src/app/albums/albums.service';
import { PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums!: Album[];
  info!: ConnectionInfo;
  editAlbum!: Album | null;
  itemsPerPage = 3;
  isShownCreateModal = false;
  isShownEditModal = false;

  createForm = new UntypedFormGroup({
    title: new UntypedFormControl(null, Validators.required),
    imageUrl: new UntypedFormControl(null, Validators.required),
  });
  createFormErrors = {
    title: [],
    imageUrl: [],
  };

  updateForm = new UntypedFormGroup({
    title: new UntypedFormControl(null, Validators.required),
    imageUrl: new UntypedFormControl(null, Validators.required),
  });
  updateFormErrors = {
    title: [],
    imageUrl: [],
  };

  private validationMessages: FormValidationMessages = {
    title: { required: 'Field is required' },
    imageUrl: { required: 'Field is required' },
  };
  private unsubscribe$ = new Subject<void>();

  constructor(private router: Router, private albumsService: AlbumsService) {}

  ngOnInit() {
    this.createForm.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(this.handleCreateFormErrors.bind(this));
    this.updateForm.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(this.handleUpdateFormErrors.bind(this));
    this.queryAlbums();
  }

  queryAlbums(page = 1): void {
    this.albumsService.queryAlbumsPaginated(page, this.itemsPerPage).subscribe(({ data, info }) => {
      this.albums = data;
      this.info = info;
    });
  }

  onPageChange({ page }: PaginatorState): void {
    this.queryAlbums(1 + page!);
  }

  showDetails(album: Album): void {
    this.router.navigate([`/albums/${album.id}`]);
  }

  createAlbum(): void {
    if (this.createForm.invalid) {
      this.handleCreateFormErrors();
      return;
    }

    const album = trimValue(this.createForm.value);
    this.albumsService.createAlbum(album).subscribe(this.hideCreateModal.bind(this));
  }

  updateAlbum(): void {
    if (this.updateForm.invalid) {
      this.handleUpdateFormErrors();
      return;
    }

    const { id } = this.editAlbum || {};
    const album = trimValue(this.updateForm.value);
    this.albumsService.updateAlbum(+id!, album).subscribe(this.hideEditModal.bind(this));
  }

  deleteAlbum({ id }: Album): void {
    this.albumsService.removeAlbum(+id).subscribe();
  }

  showCreateModal(): void {
    this.isShownCreateModal = true;
  }

  hideCreateModal(): void {
    this.isShownCreateModal = false;
    this.createForm.reset();
  }

  showEditModal({ title, imageUrl, ...rest }: Album): void {
    this.isShownEditModal = true;
    this.editAlbum = { ...rest, title, imageUrl };
    this.updateForm.setValue({ title, imageUrl });
  }

  hideEditModal(): void {
    this.isShownEditModal = false;
    this.editAlbum = null;
    this.updateForm.reset();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private handleCreateFormErrors() {
    this.createFormErrors = getFormErrors(this.createForm, this.createFormErrors, this.validationMessages) as any;
  }

  private handleUpdateFormErrors() {
    this.updateFormErrors = getFormErrors(this.updateForm, this.updateFormErrors, this.validationMessages) as any;
  }
}
