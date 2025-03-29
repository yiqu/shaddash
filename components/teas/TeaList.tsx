import Stack from '@mui/material/Stack';

import { getTeas } from '@/server/teas/teas';
import { Tea } from '@/models/teas/teas.models';

export default async function TeaList() {
  const teas: Tea[] = await getTeas();

  return (
    <section className="h-full w-full gap-y-4 flex flex-col">
      { teas.map((tea) => {
        return (
          <Stack key={ tea.name }>
            <section>
              <p>{ tea.display }</p>
            </section>
          </Stack>
        );
      }) }
    </section>
  );
}
