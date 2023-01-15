import { PublicApi } from '../../models/PublicApi';
import { PublicApiCard } from '../PublicApiCard';

interface IProps {
  items?: PublicApi[];
}

function PublicApiList({
  items
}: IProps) {

    return (
      <div>
        {items?.map((item, index) => {
          return (
            <PublicApiCard
              key={`public-api-${item.API}-${index}`}
              title={item.API}
              description={item.Description}
              externalLink={item.Link}
            />
          )
        })}
      </div>
    );
}

export { PublicApiList }
