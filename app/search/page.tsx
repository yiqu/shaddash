import Stack from "@mui/material/Stack";
import Grid2 from '@mui/material/Grid2';
import Button from '@mui/material/Button';

import SearchForm from '@/components/search/SearchForm';
import LayoutWithGutter from '@/components/layout/LayoutWithGutter';

export default function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <Stack direction="column" spacing={ 2 }>
      <h5>Search</h5>
      <SearchForm />
      <div className="flex flex-col gap-[16px]">
        <div>
          More
        </div>
        <div>
          Stuff
        </div>
      </div>
      <Button variant="contained" color="primary">
        MUI button
      </Button>
    </Stack>
  );
}
