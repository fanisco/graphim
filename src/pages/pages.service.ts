import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Page } from './page.entity';
import { PageCreateDto } from './dto/page-create.dto';
import { ch, alt } from '../common';

@Injectable()
export class PagesService {
  constructor(
    @InjectRepository(Page)
    private pagesRepository: Repository<Page>
  ) {}

  async createAndSave(pageCreateDto: PageCreateDto): Promise<number> {
    const page = new Page();
    page.title = pageCreateDto.title;
    page.h1 = ch(pageCreateDto.h1, pageCreateDto.h1, page.title);
    page.alt = alt(ch(pageCreateDto.alt, pageCreateDto.alt, page.title));
    page.descr = ch(pageCreateDto.descr, pageCreateDto.descr, '');
    await this.pagesRepository.save(page);
    return page.id;
  }

//   findOne(id: number): Promise<Page> {
//     return this.pagesRepository.findOne(id);
//   }

//   findAll(): Promise<Page[]> {
//     return this.pagesRepository.find();
//   }

//   async update(id: number, props: IProductChangableFields): Promise<void> {
//       const product = await this.findOne(id);
//       if (props.title !== undefined && props.title !== null) {
//         product.title = props.title;
//       }
//       if (props.descr !== undefined && props.descr !== null) {
//         product.descr = props.descr;
//       }
//       if (props.price !== undefined && props.price !== null) {
//         product.price = props.price;
//       }
//       await this.pagesRepository.save(product);
//   }

//   async remove(id: number): Promise<void> {
//     await this.pagesRepository.delete(id);
//   }
}
